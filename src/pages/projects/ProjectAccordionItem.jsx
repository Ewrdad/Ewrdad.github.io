import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export function ProjectAccordionItem({ id, title, stack = [], children }) {
  const stackItems = Array.isArray(stack) ? stack.filter(Boolean) : [];

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-slate-800/40">
        <AccordionTrigger className="py-4 hover:no-underline">
          <div className="flex flex-col items-start gap-2 text-left w-full pr-3 md:flex-row md:items-center md:justify-between md:gap-6">
            <h2
              id={id}
              className="text-2xl sm:text-4xl md:text-5xl font-bold break-words scroll-mt-20 md:scroll-mt-6 md:flex-1"
            >
              {title}
            </h2>
            {stackItems.length > 0 && (
              <>
                <Separator
                  orientation="vertical"
                  className="hidden md:block bg-slate-800 w-0.5 self-stretch h-auto"
                />
                <div className="flex flex-wrap gap-1.5 md:flex-col md:items-start md:w-1/3 md:gap-1">
                  {stackItems.map((item) => (
                    <span
                      key={item}
                      className="inline-block rounded bg-slate-900/15 px-2 py-0.5 text-xs sm:text-sm md:bg-transparent md:px-0 md:py-0 md:text-xl font-medium text-slate-900"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-base sm:text-lg md:text-xl leading-relaxed space-y-3 pt-2">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
