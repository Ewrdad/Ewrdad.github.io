import { Button } from "@/components/ui/button";
import { ProjectAccordionItem } from "../ProjectAccordionItem";

export const JsUseDocs = () => {
  return (
    <ProjectAccordionItem
      id="jsusedocs"
      title="JsUseDocs"
      stack={["NodeJs", "Regex/Searching", "JSDoc"]}
    >
      <h3 className="font-bold">Goal:</h3>
      <p>
        To create a querying tool for JSDocs that would allow for developing dev
        tools similar to that which rely on stricter systems(eg. typescript).
        The goals here are to have it be flexible, non-prescriptive and file
        based. Originally developed to support JsUseDocs tools
      </p>
      <h3 className="font-bold">Status</h3>
      <p>
        Has a working version public which should be stable for use. Working on
        more advanced use cases
      </p>
      <a
        href="https://www.npmjs.com/package/jsusedocs-core"
        target="_blank"
        rel="noreferrer"
        className="block pt-2"
      >
        <Button className="w-full whitespace-normal h-auto py-2.5 text-center">
          JSUseDocs On NPM
        </Button>
      </a>
    </ProjectAccordionItem>
  );
};
