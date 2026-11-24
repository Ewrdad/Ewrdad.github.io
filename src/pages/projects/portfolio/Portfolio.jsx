import { ProjectAccordionItem } from "../ProjectAccordionItem";

export const Portfolio = () => {
  return (
    <ProjectAccordionItem
      id="portfolio"
      title="Portfolio"
      stack={["Javascript", "React", "TailwindCSS/ShadcnUI"]}
    >
      <h3 className="font-bold">Goal:</h3>
      <p>
        Have a way to showcase and share information about myself in a dynamic
        way that provides greater value than a CV. To effectively create a wiki
        on my proffesional behavious and projects.
      </p>
      <h3 className="font-bold">Status</h3>
      <p>
        Working responsive version across desktop and mobile devices. Continuing
        to iterate on content and UI polish.
      </p>
    </ProjectAccordionItem>
  );
};
