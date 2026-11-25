import { PageSection } from "@/components/PageSection";
import { WORK_EXPERIENCE } from "@/data/experience";
import { useHashScroll } from "@/hooks/use-hash-scroll";

export const Work = () => {
  useHashScroll();

  return (
    <div className="space-y-4">
      {WORK_EXPERIENCE.map((role) => (
        <PageSection
          key={role.id}
          id={role.id}
          title={role.title}
          meta={[role.organization, role.employmentType, role.dateRange].filter(
            Boolean
          )}
        >
          {role.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </PageSection>
      ))}
    </div>
  );
};
