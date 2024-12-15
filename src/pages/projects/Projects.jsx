import { useEffect } from "react";
import { useLocation } from "react-router";
import { Portfolio } from "./portfolio/Portfolio";
import { JsUseDocs } from "./JsUseDocs/JsUseDocs";
import { JsUseDocsTools } from "./JsUseDocsTools/JsUseDocsTools";
import { LiveQuery } from "./LiveQuery/LiveQuery";

export const Projects = () => {
  const location = useLocation();

  useEffect(() => {
    // Function to scroll to the element with the ID specified in the hash
    const scrollToHash = () => {
      const id = location.hash.substring(1); // Remove the '#'
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Scroll to the initial hash when the component mounts
    scrollToHash();

    // Add an event listener for hash changes
    window.addEventListener("hashchange", scrollToHash);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [location]);

  return (
    <div className=" min-w-max p-5 justify-between w-[60vw] max-w-[60vw]">
      <br className="w-full" />
      <Portfolio />
      <JsUseDocs />
      <JsUseDocsTools />
      <LiveQuery />
    </div>
  );
};
