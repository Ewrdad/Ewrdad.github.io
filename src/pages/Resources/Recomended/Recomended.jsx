import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const Recomended = () => {
  return (
    <div className="text-xl">
      {
        // MARK: Talks
      }
      <h1 className="font-bold text-3xl">Talks</h1>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Intentional Code - Minimalism in a World of Dogmatic Design - David
            Whitney
          </AccordionTrigger>
          <AccordionContent>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/8j4fhsLcT4k?si=XcGMkcwHTbO7aUBJ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {
        // MARK: Articles
      }
      <h1 className="font-bold text-3xl hidden">Articles</h1>

      {
        // MARK: Books
      }
      <h1 className="font-bold text-3xl">Books</h1>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Extreme Programming Explained by Kent Beck
          </AccordionTrigger>
          <AccordionContent>
            <a href="https://amzn.eu/d/ioC4EQw">
              <Button className="w-full">Amazon (Non-Affiliate)</Button>
            </a>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
