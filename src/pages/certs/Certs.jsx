import { Fragment } from "react";
import { PageSection } from "@/components/PageSection";
import {
  CERTIFICATION_GROUPS,
  formatCertificationMeta,
  getCertificationBadge,
} from "@/data/certifications";
import { useHashScroll } from "@/hooks/use-hash-scroll";
import { normalizeTextItems } from "@/lib/content";

export const Certs = () => {
  useHashScroll();

  return (
    <div className="space-y-4">
      {CERTIFICATION_GROUPS.map((group) => (
        <Fragment key={group.id}>
          {(group.items ?? []).map((cert, index) => {
            const paragraphs = normalizeTextItems(cert.description);

            return (
              <PageSection
                key={cert.id}
                id={index === 0 ? group.id : undefined}
                title={cert.title}
                meta={formatCertificationMeta(cert)}
                badge={getCertificationBadge(cert)}
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
