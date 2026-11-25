import { Button } from "@/components/ui/button";
import { PageSection } from "@/components/PageSection";
import { ACTIVITIES } from "@/data/activities";
import { useHashScroll } from "@/hooks/use-hash-scroll";

export const Activities = () => {
  useHashScroll();

  return (
    <div className="space-y-4">
      {ACTIVITIES.map((activity) => (
        <PageSection
          key={activity.id}
          id={activity.id}
          title={activity.title}
          meta={activity.meta}
        >
          {activity.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          {activity.linksHeading && (
            <h3 className="font-semibold pt-2">{activity.linksHeading}</h3>
          )}

          {activity.links?.map((link) => (
            <Button
              key={link.href}
              asChild
              className="w-full whitespace-normal h-auto py-2.5 text-center"
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </Button>
          ))}
        </PageSection>
      ))}
    </div>
  );
};
