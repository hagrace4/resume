#!/bin/bash
# Deployment script for resume application
# This script pulls the latest Docker image and restarts the container

set -euo pipefail  # Exit on error, undefined variables, and pipe failures

# Configuration
IMAGE_NAME="${1:-ghcr.io/hagrace4/resume:latest}"
CONTAINER_NAME="resume-app"
PORT="3000"
LOG_FILE="/var/log/resume-deploy.log"

# Logging function
log() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] $*" | tee -a "$LOG_FILE"
}

log "=========================================="
log "Starting deployment of $IMAGE_NAME"
log "=========================================="

# Step 1: Login to GitHub Container Registry
log "Logging in to GitHub Container Registry..."
echo "$GITHUB_TOKEN" | docker login ghcr.io -u "$GITHUB_ACTOR" --password-stdin 2>&1 | tee -a "$LOG_FILE" || {
    log "ERROR: Failed to login to container registry"
    exit 1
}

# Step 2: Pull the latest image
log "Pulling Docker image: $IMAGE_NAME"
docker pull "$IMAGE_NAME" 2>&1 | tee -a "$LOG_FILE" || {
    log "ERROR: Failed to pull Docker image"
    exit 1
}

# Step 3: Check if container is already running
if docker ps -a --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
    log "Existing container found. Stopping and removing..."
    
    # Stop the container gracefully (30 second timeout)
    docker stop -t 30 "$CONTAINER_NAME" 2>&1 | tee -a "$LOG_FILE" || {
        log "WARNING: Failed to stop container gracefully, forcing removal"
    }
    
    # Remove the old container
    docker rm "$CONTAINER_NAME" 2>&1 | tee -a "$LOG_FILE" || {
        log "WARNING: Failed to remove old container"
    }
else
    log "No existing container found"
fi

# Step 4: Start new container
log "Starting new container..."
docker run -d \
    --name "$CONTAINER_NAME" \
    --restart unless-stopped \
    -p "${PORT}:3000" \
    -e NODE_ENV=production \
    --log-driver json-file \
    --log-opt max-size=10m \
    --log-opt max-file=3 \
    "$IMAGE_NAME" 2>&1 | tee -a "$LOG_FILE" || {
    log "ERROR: Failed to start container"
    exit 1
}

# Step 5: Wait for container to be healthy
log "Waiting for container to start..."
sleep 5

# Step 6: Verify container is running
if docker ps --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
    log "✓ Container is running"
else
    log "ERROR: Container failed to start"
    log "Container logs:"
    docker logs "$CONTAINER_NAME" 2>&1 | tee -a "$LOG_FILE"
    exit 1
fi

# Step 7: Health check
log "Performing health check..."
if curl -f -s -o /dev/null http://localhost:${PORT}; then
    log "✓ Health check passed - application is responding"
else
    log "WARNING: Health check failed - application may not be ready yet"
    log "Container logs:"
    docker logs --tail 50 "$CONTAINER_NAME" 2>&1 | tee -a "$LOG_FILE"
fi

# Step 8: Cleanup old images (keep last 3)
log "Cleaning up old Docker images..."
docker images --format '{{.Repository}}:{{.Tag}} {{.ID}}' | \
    grep "ghcr.io/.*/resume" | \
    tail -n +4 | \
    awk '{print $2}' | \
    xargs -r docker rmi 2>&1 | tee -a "$LOG_FILE" || {
    log "WARNING: Failed to cleanup old images (this is non-critical)"
}

log "=========================================="
log "Deployment completed successfully!"
log "Container: $CONTAINER_NAME"
log "Image: $IMAGE_NAME"
log "Port: $PORT"
log "=========================================="

# Display container status
docker ps --filter "name=$CONTAINER_NAME" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
