import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const Self = () => {
  return (
    <div className="text-base sm:text-lg md:text-xl space-y-6">
      {
        // MARK: slide decks
      }
      <section>
        <h2 className="font-bold text-2xl sm:text-3xl mb-2">Slidedecks</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-slate-800/40">
            <AccordionTrigger>Tackling TDD for UI</AccordionTrigger>
            <AccordionContent>
              <Button
                asChild
                className="w-full whitespace-normal h-auto py-2.5 text-center"
              >
                <a
                  href="https://drive.google.com/file/d/1_72C2DbIEe7pMI57dP5keHWGroRGhB7k/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </Button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {
        // MARK: Articles
      }
      <section>
        <h2 className="font-bold text-2xl sm:text-3xl mb-2">Articles</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-slate-800/40">
            <AccordionTrigger>
              Using Tech in Self-Promotion for a Greener Environment
            </AccordionTrigger>
            <AccordionContent>
              <Button
                asChild
                className="w-full whitespace-normal h-auto py-2.5 text-center"
              >
                <a
                  href="https://www.linkedin.com/pulse/using-tech-self-promotion-greener-environment-edward-jones/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on LinkedIN
                </a>
              </Button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {
        // MARK: Cheat sheets
      }
      <section>
        <h2 className="font-bold text-2xl sm:text-3xl mb-2">Cheat sheets</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-slate-800/40">
            <AccordionTrigger>
              Secure Software development. Whistle stop tour
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-2">
                <Button
                  asChild
                  className="w-full whitespace-normal h-auto py-2.5 text-center"
                >
                  <a
                    href={`${import.meta.env.BASE_URL}Resources/DevSecOps/QuickDevSecOps.svg`}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    SVG Download
                  </a>
                </Button>
                <Button
                  asChild
                  className="w-full whitespace-normal h-auto py-2.5 text-center"
                >
                  <a
                    href={`${import.meta.env.BASE_URL}Resources/DevSecOps/QuickDevSecOps.excalidraw`}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    Excalidraw Download
                  </a>
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
};
