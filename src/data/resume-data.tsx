import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Harry Grace",
  initials: "HG",
  location: "Northridge, CA",
  locationLink: "https://www.google.com/maps/place/Northridge,+CA",
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
      title: "DevOps Engineer I",
      start: "Mar 2024",
      end: null,
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Led AWS environment provisioning via modular CloudFormation (VPC,
              subnets, routing, security groups, EC2/RDS) with parameterized
              stacks and change sets; integrated Ansible for post-provision
              bootstrapping
            </li>
            <li>
              Linux systems engineering & operations: standardized Amazon
              Linux/OL8 baselines with Ansible; managed systemd services,
              SELinux, firewalld, and OS patch cycles; implemented user/sudo &
              SSH key management, logrotate/auditd, and kernel/network tuning
              for production reliability
            </li>
            <li>
              Managed and owned GitLab and org-wide CI/CD: administered runners,
              optimized pipelines (caching, artifacts, parallelization),
              enforced protected branches and merge checks, and created reusable
              templates to standardize build/test/deploy across teams; improved
              reliability and delivery speed
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
    "AWS CloudFormation",
    "Route53",
    "ACM",
    "EC2",
    "RDS",
    "VPC",
    "S3",
    "CloudWatch",
    "SSM",
    "KMS",
    "Ansible",
    "systemd",
    "Git",
    "GitLab",
    "SSL/TLS",
    "DNS",
    "DKIM/DMARC/SPF",
    "Splunk",
    "Nagios",
    "Checkmk",
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
      date: "In Progress",
      status: "in-progress",
    },
    {
      title: "Amateur Radio License — Technician Class",
      issuer: "FCC",
      date: "Active",
      status: "active",
    },
  ],
  projects: [
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
  ],
} as const;
