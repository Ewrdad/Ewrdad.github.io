import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export const LiveQuery = () => {
  return (
    <>
      <Accordion type="single" collapsible className="w-max max-w-[60vw]">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="p-5">
              <div className="flex w-[60vw]  justify-between no-underline hover:no-underline overflow-x-hidden overflow-y-scroll">
                <div className="flex w-full">
                  <h1 id="livequery" className="text-6xl">
                    LiveQuery
                  </h1>
                </div>
                <div className="flex">
                  <Separator
                    orientation="vertical"
                    className="bg-slate-800 w-0.5 mr-10 sm:block hidden "
                  />
                </div>
                <div className="flex-col text-3xl w-1/4 justify-items-start justify-start">
                  <h1>Websocket</h1>
                  <h1>ShacnUI/TailwindCSS</h1>
                  <h1>Javascript/NodeJS</h1>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="text-xl">
              <h3 className="font-bold">Goal:</h3>
              <p>
                To have a simple way to run quizes during workshops and A way to
                quiz a group of people live during a meeting
              </p>
              <h3 className="font-bold">Status</h3>
              <p>
                {" "}
                A rudementary proof of concept but requires a bit more work to
                get ready for a production use cases
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
