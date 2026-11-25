import { PageSection } from "@/components/PageSection";
import { EDUCATION } from "@/data/education";
import { useHashScroll } from "@/hooks/use-hash-scroll";

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
          {item.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </PageSection>
      ))}
    </div>
  );
};
