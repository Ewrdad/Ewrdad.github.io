import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export const JsUseDocsTools = () => {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="p-5">
              <div className="flex justify-between no-underline hover:no-underline w-[60vw]">
                <div className="flex w-full">
                  <h1 className="text-6xl">JsUseDocsTools</h1>
                </div>
                <div className="flex">
                  <Separator
                    orientation="vertical"
                    className="bg-slate-800 w-0.5 mr-10 sm:block hidden "
                  />
                </div>
                <div className="flex-col text-3xl w-1/4 justify-items-start justify-start">
                  <h1>Electron/React</h1>
                  <h1>ShadcnUI/TailwindCSS</h1>
                  <h1>Javascript/NodeJS </h1>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="text-xl max-w-[60vw]">
              <h3 className="font-bold">Goal:</h3>
              <p>
                To have a tool that enables understanding a codebase without
                requiring specail syntax or tooling. Based on JSdoc allow a
                codebase to be self documenting in a true sense, generating its
                own wiki as you code.
              </p>

              <p className="pt-5">
                Similar to tools such as Confluence or notion but without
                drawing a divide between docs and code.
              </p>
              <h3 className="font-bold">Status</h3>
              <p>
                {" "}
                Very ambitios and very early on. Currently some working proof of
                concepts for terminal system and some page layout features but
                no integration into JsUseDocs yet.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
