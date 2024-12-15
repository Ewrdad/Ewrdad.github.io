import { useEffect } from "react";
import { useLocation } from "react-router";
import { Separator } from "@/components/ui/separator";

export const Edu = () => {
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
    <div>
      <div className="p-5">
        <div className="flex w-full justify-between">
          <div className="flex w-3/4">
            <h1 id="uni" className="text-6xl">
              [2:1] BSc Computer Security
            </h1>
          </div>
          <div className="flex">
            <Separator
              orientation="vertical"
              className="bg-slate-800 w-0.5 mr-10 sm:block hidden "
            />
          </div>
          <div className="flex-col text-3xl w-1/4">
            <h1>University of South Wales</h1>
            <h1>(2018-2022)</h1>
          </div>
        </div>
        <div>
          <p className="text-xl w-full">
            A sandwhich bachelors degree based in Pontypridd. Learning skills
            from Cryptography, to software development and with a keen focus on
            Penetration testing.
          </p>
        </div>
      </div>

      <div className="p-5">
        <div className="flex w-full justify-between">
          <div className="flex w-3/4">
            <h1 id="chs" className="text-6xl">
              GCSEs + A levels
            </h1>
          </div>
          <div className="flex">
            <Separator
              orientation="vertical"
              className="bg-slate-800 w-0.5 mr-10 sm:block hidden "
            />
          </div>
          <div className="flex-col text-3xl w-1/4">
            <h1>Cardiff High School</h1>
            <h1>(2014-2018)</h1>
          </div>
        </div>
        <div>
          <p className="text-xl w-full">
            GCSE: Computer Science, Maths, Triple Science, English, Welsh, RP,
            Textiles, Economics, More I cant remember
          </p>
          <p className="text-xl w-full">
            A levels: Law, Buisness Studies, Economics (Also continued studying
            Computer Science, attending half of the lessons)
          </p>
        </div>
      </div>
    </div>
  );
};
