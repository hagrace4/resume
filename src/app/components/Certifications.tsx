import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

interface CertificationsProps {
  certifications: typeof RESUME_DATA.certifications;
}

/**
 * Certification item component
 */
function CertificationItem({
  cert,
}: {
  cert: (typeof RESUME_DATA.certifications)[number];
}) {
  const statusColor =
    cert.status === "active"
      ? "bg-green-500/10 text-green-700 dark:text-green-400"
      : "bg-blue-500/10 text-blue-700 dark:text-blue-400";

  const statusText = cert.status === "active" ? "Active" : "In Progress";

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-start justify-between gap-x-2">
        <h3 className="font-semibold leading-none">{cert.title}</h3>
        <Badge className={statusColor} variant="secondary">
          {statusText}
        </Badge>
      </div>
      <div className="text-sm text-muted-foreground">
        {cert.issuer} • {cert.date}
      </div>
    </div>
  );
}

/**
 * Certifications section component
 */
export function Certifications({ certifications }: CertificationsProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold">Certifications</h2>
      <div className="flex flex-col gap-3">
        {certifications.map((cert, index) => (
          <CertificationItem key={index} cert={cert} />
        ))}
      </div>
    </Section>
  );
}
