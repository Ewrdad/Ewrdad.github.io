import { PageSection } from "@/components/PageSection";
import { EDUCATION } from "@/data/education";
import { useHashScroll } from "@/hooks/use-hash-scroll";
import { normalizeTextItems } from "@/lib/content";

export const Edu = () => {
  useHashScroll();

  return (
    <div className="space-y-4">
      {EDUCATION.map((item) => (
        <PageSection
          key={item.id}
          id={item.id}
          title={item.title}
          meta={item.meta}
        >
          {normalizeTextItems(item.paragraphs).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </PageSection>
      ))}
    </div>
  );
};
