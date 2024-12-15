import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export const JsUseDocs = () => {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="p-5">
              <div className="flex w-[60vw] justify-between no-underline hover:no-underline">
                <div className="flex w-full">
                  <h1 id="jsusedocs" className="text-6xl">
                    JsUseDocs
                  </h1>
                </div>
                <div className="flex">
                  <Separator
                    orientation="vertical"
                    className="bg-slate-800 w-0.5 mr-10 sm:block hidden "
                  />
                </div>
                <div className="flex-col text-3xl w-1/4 justify-items-start justify-start">
                  <h1>NodeJs</h1>
                  <h1>Regex/Searching</h1>
                  <h1>JSDoc </h1>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="text-xl max-w-[60vw]">
              <h3 className="font-bold">Goal:</h3>
              <p>
                To create a querying tool for JSDocs that would allow for
                developing dev tools similar to that which rely on stricter
                systems(eg. typescript). The goals here are to have it be
                flexible, non-prescriptive and file based. Originally developed
                to support JsUseDocs tools
              </p>
              <h3 className="font-bold">Status</h3>
              <p>
                {" "}
                Has a working version public which should be stable for use.
                Working on more advanced use cases
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
