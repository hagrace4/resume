import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Harry Grace",
  initials: "HG",
  location: "West Des Moines, IA",
  locationLink: "https://www.google.com/maps/place/West+Des+Moines,+IA",
  about: "DevOps Engineer specializing in AWS infrastructure and automation.",
  summary: (
    <>
      DevOps Engineer with expertise in AWS cloud infrastructure, Linux systems
      engineering, and CI/CD automation. Experienced in CloudFormation, Ansible,
      GitLab administration, and building scalable, reliable production systems.
    </>
  ),
  avatarUrl: "https://harrygrace.me/images/avatar.jpg",
  personalWebsiteUrl: "https://harrygrace.me",
  contact: {
    email: "hagrace4@proton.me",
    tel: "+18184815722",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/hagrace4",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hagrace4",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "California State University - Northridge",
      degree: "BS in Computer Information Technology",
      start: "2020",
      end: "2024",
    },
    {
      school: "California Lutheran University",
      degree: "Bioengineering",
      start: "2008",
      end: "2011",
    },
  ],
  work: [
    {
      company: "Businessolver",
      link: "https://www.businessolver.com/",
      badges: ["Remote", "AWS", "CloudFormation", "Ansible", "GitLab", "Linux"],
      title: "DevOps Engineer II",
      start: "Apr 2025",
      end: null,
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Designed and shipped a native Linux cron management system in
              Python and Bash with Ansible Automation Platform: centralized
              review, deployment, and drift detection from GitLab review to
              CodeCommit source, plan/apply, and readback reports; 50 passing
              tests and a validated pipeline before operator handoff
            </li>
            <li>
              Built a three-stage SendGrid onboarding workflow in Ansible Tower
              covering shared, company-owned, and client-owned sender domains:
              provisioning, legacy DKIM preparation, and DNS publish/validate,
              with 65 unit tests, offline failure-mode scenarios, checkpointed
              recovery, and activation kept separate from preparation
            </li>
            <li>
              Ran the UA2 SQS load-test analysis across 60 application servers,
              12 batch servers, one file server, and RDS; read-only CloudWatch
              collection and tier-by-tier comparison identified RDS as the
              constrained tier, with peak CPU moving from 99.55% to 86.03% and
              run duration from 15 to 11 minutes alongside application fixes
            </li>
            <li>
              Modeled AWS spend for 16 environments across three architecture
              scenarios and two pricing tiers, identifying roughly $6,220 per
              year in modeled reserved-pricing opportunity and documenting
              instance-replacement billing distortions in Cost Explorer
            </li>
            <li>
              Audited fleet patching across four Ansible Tower instances and
              approximately 449 servers, recording nine gaps in schedule
              coverage, boot-kernel handling, and playbook logic, then converted
              the findings into runbooks and preflight checks
            </li>
            <li>
              Built Codex skills and MCP-based read-only tooling for Jira,
              GitLab, AWS, and Ansible Tower with enforced guardrails: pinned
              hosts, scoped credential profiles, validated writes, and readback
              verification
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Businessolver",
      link: "https://www.businessolver.com/",
      badges: ["Remote", "AWS", "CloudFormation", "Ansible", "GitLab", "Linux"],
      title: "DevOps Engineer I",
      start: "Mar 2024",
      end: "Apr 2025",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Led AWS environment provisioning as Infrastructure as Code with
              modular CloudFormation (VPC, subnets, routing, security groups,
              EC2/RDS), parameterized stacks and change sets; integrated Ansible
              for post-provision bootstrapping
            </li>
            <li>
              Linux systems engineering & operations: standardized Amazon
              Linux/OL8 baselines with Ansible; managed systemd services,
              SELinux, firewalld policy, and OS patch cycles; implemented
              role-based access control (RBAC) for users, sudo, and SSH keys,
              plus logrotate/auditd and kernel/network tuning for production
              reliability
            </li>
            <li>
              Managed and owned GitLab and org-wide CI/CD: administered runners,
              optimized pipelines (caching, artifacts, parallelization),
              enforced protected branches and merge checks, and created reusable
              templates to standardize build/test/deploy across teams; improved
              reliability and delivery speed
            </li>
            <li>
              Provided 24/7 on-call support for production deployments and
              incident response; monitored system health, troubleshot critical
              issues, and coordinated emergency patches to maintain 99.9%
              application uptime and minimize business impact
            </li>
            <li>
              Administered Java web application deployments across multi-tier
              environments; managed application server configurations, JVM
              tuning, database connections, and coordinated blue-green
              deployments to ensure zero-downtime releases
            </li>
            <li>
              Architected and implemented CI/CD pipelines for microservices and
              security engineering initiatives; integrated automated security
              scanning (SAST/DAST), container vulnerability assessments, and
              compliance checks into deployment workflows, reducing security
              remediation time by 60%
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Businessolver",
      link: "https://www.businessolver.com/",
      badges: ["Remote", "AWS", "Ansible", "Splunk", "Route53"],
      title: "DevOps Intern",
      start: "Jun 2023",
      end: "Mar 2024",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Developed Ansible plays to automate DKIM creation for a mail
              server and configured DNS records on AWS Route53, enhancing email
              security and streamlining domain management processes
            </li>
            <li>
              Improved a critical database server script to ensure automatic
              restart upon server reboot. Integrated Splunk for real-time
              alerting, significantly enhancing system reliability and reducing
              downtime in case of tunnel failures
            </li>
            <li>
              Updated and managed SSL certificates on internal servers, ensuring
              secure and encrypted communication, and maintaining compliance
              with security standards
            </li>
            <li>
              Shadowed experienced DevOps Engineers, gaining insights into
              advanced system administration, automation strategies, and best
              practices in a real-world technology environment
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Python",
    "Bash",
    "YAML",
    "Infrastructure as Code (IaC)",
    "AWS CloudFormation",
    "Ansible",
    "Ansible Tower/AAP",
    "AWS",
    "Route53",
    "ACM",
    "EC2",
    "RDS",
    "VPC",
    "S3",
    "SQS",
    "CloudWatch",
    "SSM",
    "KMS",
    "Akamai",
    "Docker",
    "Kubernetes (K3s)",
    "systemd",
    "Oracle Linux",
    "pgadmin",
    "Git",
    "GitLab",
    "GitLab CI/CD",
    "RBAC",
    "SSL/TLS",
    "DNS",
    "Postfix",
    "OpenDKIM",
    "DKIM/DMARC/SPF",
    "Splunk",
    "Grafana",
    "Nagios",
    "Checkmk",
    "MCP",
    "Codex",
    "Linux",
    "Windows",
    "macOS",
  ],
  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Dec 2022",
      status: "active",
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "In Progress",
      status: "in-progress",
    },
    {
      title: "Certified Cloud Native Platform Engineering Associate (CNPA)",
      issuer: "Cloud Native Computing Foundation",
      date: "Jan 2026",
      status: "active",
    },
    {
      title: "Amateur Radio License — Technician Class",
      issuer: "FCC • KO6MYG",
      date: "Active",
      status: "active",
    },
  ],
  projects: [
    {
      title: "ML Pipeline Deployment System",
      techStack: [
        "Python",
        "Kubernetes (K3s)",
        "PyTorch",
        "XGBoost",
        "MLflow",
        "FastAPI",
        "Prometheus",
        "Grafana",
        "GitHub Actions",
      ],
      description:
        "Built an end-to-end MLOps pipeline for a homelab K3s cluster with GPU-accelerated training, model registry/versioning, and FastAPI inference services. Implemented config management, structured logging, Prometheus metrics, and property-based tests; CI/CD runs via GitHub Actions with self-hosted runners.",
      link: {
        label: "github.com",
        href: "https://github.com/hagrace4/ml-pipeline-deployment",
      },
    },

    {
      title: "Automated Resume Deployment with GitHub Actions",
      techStack: [
        "GitHub Actions",
        "Docker",
        "Oracle Cloud",
        "nginx",
        "SSH",
        "CI/CD",
      ],
      description:
        "Built end-to-end CI/CD pipeline using GitHub Actions to automatically build, test, containerize, and deploy a Next.js resume application to Oracle Cloud Infrastructure. Implemented automated Docker image builds with GitHub Container Registry, SSH-based deployment automation, and container lifecycle management with health checks and rollback capabilities.",
      link: {
        label: "github.com",
        href: "https://github.com/hagrace4/resume",
      },
    },
    {
      title: "Splunk Cloud Logging & Ingestion Program",
      techStack: ["Splunk", "Universal Forwarders", "GitLab", "OSSEC"],
      description:
        "Deployed and configured Splunk Universal Forwarders across 150+ DevOps-managed servers for consistent ingestion into Splunk Cloud. Built new monitoring inputs for GitLab instances and remediated misconfigured OSSEC setup.",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Containerization Rollout",
      techStack: ["Ansible", "Docker", "JVM", "Configuration Management"],
      description:
        "Authored/updated Ansible roles and plays to deploy containers with parameterized JVM options and environment variables. Implemented environment-specific configuration to eliminate server drift and coordinated change controls for each stage.",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "AWS Environment Provisioning & Baseline",
      techStack: [
        "AWS CloudFormation",
        "VPC",
        "EC2",
        "RDS",
        "Ansible",
        "Route53",
      ],
      description:
        "Built repeatable dev/stage/prod environments using modular CloudFormation stacks (VPC, subnets, routing, security groups, compute/database layers). Parameterized templates for account/region reuse and authored runbooks enabling self-service provisioning.",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Stalwart Email Server Deployment",
      techStack: ["Stalwart", "Postgres", "Docker", "pgadmin"],
      description:
        "Installed, configured, and implemented a Stalwart email server backed by Postgres. Provisioned and validated database connectivity, tuned core mail services, and verified end-to-end mail flow for a production-ready setup.",
      link: {
        label: "",
        href: "",
      },
    },
  ],
} as const;
