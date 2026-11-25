import { Fragment } from "react";
import { PageSection } from "@/components/PageSection";
import {
  CERTIFICATION_GROUPS,
  formatCertificationMeta,
} from "@/data/certifications";
import { useHashScroll } from "@/hooks/use-hash-scroll";

export const Certs = () => {
  useHashScroll();

  return (
    <div className="space-y-4">
      {CERTIFICATION_GROUPS.map((group) => (
        <Fragment key={group.id}>
          {group.items.map((cert, index) => {
            const paragraphs = Array.isArray(cert.description)
              ? cert.description
              : [cert.description];

            return (
              <PageSection
                key={cert.id}
                id={index === 0 ? group.id : undefined}
                title={cert.title}
                meta={formatCertificationMeta(cert)}
                badge={
                  cert.status === "expired"
                    ? { label: "Expired", variant: "expired" }
                    : null
                }
              >
                {paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </PageSection>
            );
          })}
        </Fragment>
      ))}
    </div>
  );
};
