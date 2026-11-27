import { Separator } from "@/components/ui/separator";
import {
  normalizeAnchorId,
  normalizeBadge,
  normalizeMetaItems,
} from "@/lib/content";
import { cn } from "@/lib/utils";

const BADGE_VARIANTS = {
  default: "bg-slate-900 text-slate-100 border-slate-700",
  expired: "bg-amber-950 text-amber-100 border-amber-400/70",
};

export function PageSection({
  id,
  title,
  meta = [],
  badge = null,
  children,
  className,
}) {
  const anchorId = normalizeAnchorId(id);
  const metaItems = normalizeMetaItems(meta);
  const normalizedBadge = normalizeBadge(badge);

  return (
    <section className={cn("p-4 sm:p-5 space-y-3", className)}>
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-6">
        <div className="md:w-3/4 space-y-2">
          <h1
            id={anchorId}
            className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight break-words scroll-mt-20 md:scroll-mt-6"
          >
            {title}
          </h1>
          {normalizedBadge && (
            <span
              className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs sm:text-sm font-semibold uppercase tracking-wide",
                BADGE_VARIANTS[normalizedBadge.variant] ||
                  BADGE_VARIANTS.default
              )}
            >
              {normalizedBadge.label}
            </span>
          )}
        </div>
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
