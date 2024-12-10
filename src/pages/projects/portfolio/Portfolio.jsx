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
              <div className="flex w-full justify-between no-underline hover:no-underline">
                <div className="flex w-full">
                  <h1 id="raytheon" className="text-6xl">
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
            <div>
              <p className="text-xl w-full">
                Although membership of BCS is often described only as beneficial
                as the effort you put in, I have found it to be a great way to
                keep up to date with the latest trends in the industry. I have
                been able to attend many events and webinars that have helped me
                to keep my skills fresh and learn about new technologies. I have
                also been able to network with other professionals in the
                industry and learn from their experiences. I have found that
                being a member of BCS has helped me to stay motivated and
                focused on my career goals.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
