import { ProjectAccordionItem } from "../ProjectAccordionItem";

export const JsUseDocsTools = () => {
  return (
    <ProjectAccordionItem
      title="JsUseDocsTools"
      stack={["Electron/React", "ShadcnUI/TailwindCSS", "Javascript/NodeJS"]}
    >
      <h3 className="font-bold">Goal:</h3>
      <p>
        To have a tool that enables understanding a codebase without requiring
        specail syntax or tooling. Based on JSdoc allow a codebase to be self
        documenting in a true sense, generating its own wiki as you code.
      </p>
      <p>
        Similar to tools such as Confluence or notion but without drawing a
        divide between docs and code.
      </p>
      <h3 className="font-bold">Status</h3>
      <p>
        Very ambitios and very early on. Currently some working proof of
        concepts for terminal system and some page layout features but no
        integration into JsUseDocs yet.
      </p>
    </ProjectAccordionItem>
  );
};
