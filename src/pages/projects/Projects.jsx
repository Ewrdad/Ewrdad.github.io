import { useEffect } from "react";
import { useLocation } from "react-router";
import { Separator } from "@/components/ui/separator";

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
    <>
      <div className="p-5">
        <div className="flex w-full justify-between">
          <div className="flex w-3/4">
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
          <div className="flex-col text-3xl w-1/4">
            <h1>Javascript</h1>
            <h1>React</h1>
            <h1>TailwindCSS/ShadcnUI</h1>
          </div>
        </div>
        <div>
          <p className="text-xl w-full">
            Although membership of BCS is often described only as beneficial as
            the effort you put in, I have found it to be a great way to keep up
            to date with the latest trends in the industry. I have been able to
            attend many events and webinars that have helped me to keep my
            skills fresh and learn about new technologies. I have also been able
            to network with other professionals in the industry and learn from
            their experiences. I have found that being a member of BCS has
            helped me to stay motivated and focused on my career goals.
          </p>
        </div>
      </div>

      <div className="p-5">
        <div className="flex w-full justify-between">
          <div className="flex w-3/4">
            <h1 id="raytheon" className="text-6xl">
              JsUseDocs
            </h1>
          </div>
          <div className="flex">
            <Separator
              orientation="vertical"
              className="bg-slate-800 w-0.5 mr-10 sm:block hidden "
            />
          </div>
          <div className="flex-col text-3xl w-1/4">
            <h1>NodeJs</h1>
            <h1>Regex/Searching</h1>
            <h1>JSDoc </h1>
          </div>
        </div>
        <div>
          <p className="text-xl w-full">
            Although membership of BCS is often described only as beneficial as
            the effort you put in, I have found it to be a great way to keep up
            to date with the latest trends in the industry. I have been able to
            attend many events and webinars that have helped me to keep my
            skills fresh and learn about new technologies. I have also been able
            to network with other professionals in the industry and learn from
            their experiences. I have found that being a member of BCS has
            helped me to stay motivated and focused on my career goals.
          </p>
        </div>
      </div>

      <div className="p-5">
        <div className="flex w-full justify-between">
          <div className="flex w-3/4">
            <h1 id="raytheon" className="text-6xl">
              JsUseDocs Tools
            </h1>
          </div>
          <div className="flex">
            <Separator
              orientation="vertical"
              className="bg-slate-800 w-0.5 mr-10 sm:block hidden "
            />
          </div>
          <div className="flex-col text-3xl w-1/4">
            <h1>Electron/React</h1>
            <h1>ShacnUI/TailwindCSS</h1>
            <h1>Javascript/NodeJS</h1>
          </div>
        </div>
        <div>
          <p className="text-xl w-full">
            Although membership of BCS is often described only as beneficial as
            the effort you put in, I have found it to be a great way to keep up
            to date with the latest trends in the industry. I have been able to
            attend many events and webinars that have helped me to keep my
            skills fresh and learn about new technologies. I have also been able
            to network with other professionals in the industry and learn from
            their experiences. I have found that being a member of BCS has
            helped me to stay motivated and focused on my career goals.
          </p>
        </div>
      </div>

      <div className="p-5">
        <div className="flex w-full justify-between">
          <div className="flex w-3/4">
            <h1 id="raytheon" className="text-6xl">
              LiveQuery
            </h1>
          </div>
          <div className="flex">
            <Separator
              orientation="vertical"
              className="bg-slate-800 w-0.5 mr-10 sm:block hidden "
            />
          </div>
          <div className="flex-col text-3xl w-1/4">
            <h1>Websocket</h1>
            <h1>ShacnUI/TailwindCSS</h1>
            <h1>Javascript/NodeJS</h1>
          </div>
        </div>
        <div>
          <p className="text-xl w-full">
            Although membership of BCS is often described only as beneficial as
            the effort you put in, I have found it to be a great way to keep up
            to date with the latest trends in the industry. I have been able to
            attend many events and webinars that have helped me to keep my
            skills fresh and learn about new technologies. I have also been able
            to network with other professionals in the industry and learn from
            their experiences. I have found that being a member of BCS has
            helped me to stay motivated and focused on my career goals.
          </p>
        </div>
      </div>
    </>
  );
};
