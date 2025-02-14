import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export const Portfolio = () => {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="p-5">
              <div className="flex w-[60vw] justify-between no-underline hover:no-underline">
                <div className="flex w-full">
                  <h1 id="portfolio" className="text-6xl">
                    Portfolio
                  </h1>
                </div>
                <div className="flex">
                  <Separator
                    orientation="vertical"
                    className="bg-slate-800 w-0.5 mr-10 sm:block hidden "
                  />
                </div>
                <div className="flex-col text-3xl w-1/4 justify-items-start justify-start">
                  <h1>Javascript</h1>
                  <h1>React</h1>
                  <h1>TailwindCSS/ShadcnUI</h1>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="text-xl max-w-[60vw]">
              <h3 className="font-bold">Goal:</h3>
              <p>
                Have a way to showcase and share information about myself in a
                dynamic way that provides greater value than a CV. To
                effectively create a wiki on my proffesional behavious and
                projects.
              </p>
              <h3 className="font-bold">Status</h3>
              <p>
                {" "}
                Basic working version. Currently just working on improving the
                content element then can go back and clean UI. Mobile experience
                is currently not great.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
