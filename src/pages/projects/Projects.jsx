import { useHashScroll } from "@/hooks/use-hash-scroll";
import { Portfolio } from "./portfolio/Portfolio";
import { JsUseDocs } from "./JsUseDocs/JsUseDocs";
import { JsUseDocsTools } from "./JsUseDocsTools/JsUseDocsTools";
import { LiveQuery } from "./LiveQuery/LiveQuery";

export const Projects = () => {
  useHashScroll();

  return (
    <div className="w-full space-y-2">
      <Portfolio />
      <JsUseDocs />
      <JsUseDocsTools />
      <LiveQuery />
    </div>
  );
};
