import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function PageSection({ id, title, meta = [], children, className }) {
  const metaItems = Array.isArray(meta)
    ? meta.filter(Boolean)
    : meta
      ? [meta]
      : [];

  return (
    <section className={cn("p-4 sm:p-5 space-y-3", className)}>
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-6">
        <h1
          id={id}
          className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight break-words scroll-mt-20 md:scroll-mt-6 md:w-3/4"
        >
          {title}
        </h1>
        {metaItems.length > 0 && (
          <>
            <Separator
              orientation="vertical"
              className="hidden md:block bg-slate-800 w-0.5 self-stretch h-auto"
            />
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-base sm:text-lg md:flex-col md:text-2xl md:w-1/4 text-slate-900/90 font-medium">
              {metaItems.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="text-base sm:text-lg md:text-xl leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
}
