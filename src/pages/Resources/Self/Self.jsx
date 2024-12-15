import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const Self = () => {
  return (
    <>
      {
        // MARK: slide decks
      }
      <h1 className="font-bold text-3xl">Slidedecks</h1>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Tackling TDD for UI</AccordionTrigger>
          <AccordionContent>
            <a href="https://drive.google.com/file/d/1_72C2DbIEe7pMI57dP5keHWGroRGhB7k/view?usp=sharing">
              <Button className="w-full">View</Button>
            </a>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      {
        // MARK: Articles
      }
      <h1 className="font-bold text-3xl">Articles</h1>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Using Tech in Self-Promotion for a Greener Environment
          </AccordionTrigger>
          <AccordionContent>
            <a href="https://www.linkedin.com/pulse/using-tech-self-promotion-greener-environment-edward-jones/">
              <Button className="w-full">View on LinkedIN</Button>
            </a>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
