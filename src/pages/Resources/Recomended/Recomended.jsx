import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const Recomended = () => {
  return (
    <div className="text-base sm:text-lg md:text-xl space-y-6">
      {
        // MARK: Talks
      }
      <section>
        <h2 className="font-bold text-2xl sm:text-3xl mb-2">Talks</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-slate-800/40">
            <AccordionTrigger>
              Intentional Code - Minimalism in a World of Dogmatic Design -
              David Whitney
            </AccordionTrigger>
            <AccordionContent>
              <div className="relative w-full aspect-video overflow-hidden rounded-md">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/8j4fhsLcT4k?si=XcGMkcwHTbO7aUBJ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {
        // MARK: Articles
      }
      <h2 className="font-bold text-2xl sm:text-3xl hidden">Articles</h2>

      {
        // MARK: Books
      }
      <section>
        <h2 className="font-bold text-2xl sm:text-3xl mb-2">Books</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-slate-800/40">
            <AccordionTrigger>
              Extreme Programming Explained by Kent Beck
            </AccordionTrigger>
            <AccordionContent>
              <a
                href="https://amzn.eu/d/ioC4EQw"
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <Button className="w-full whitespace-normal h-auto py-2.5 text-center">
                  Amazon (Non-Affiliate)
                </Button>
              </a>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
};
