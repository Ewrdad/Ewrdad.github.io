import { ProjectAccordionItem } from "../ProjectAccordionItem";

export const LiveQuery = () => {
  return (
    <ProjectAccordionItem
      id="livequery"
      title="LiveQuery"
      stack={["Websocket", "ShacnUI/TailwindCSS", "Javascript/NodeJS"]}
    >
      <h3 className="font-bold">Goal:</h3>
      <p>
        To have a simple way to run quizes during workshops and A way to quiz a
        group of people live during a meeting
      </p>
      <h3 className="font-bold">Status</h3>
      <p>
        A rudementary proof of concept but requires a bit more work to get ready
        for a production use cases
      </p>
    </ProjectAccordionItem>
  );
};
