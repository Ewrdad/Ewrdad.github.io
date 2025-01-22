import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";
import { useLocation } from "react-router";

export const Activities = () => {
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
            <h1 id="enactus" className="text-6xl">
              Enactus USW
            </h1>
          </div>
          <div className="flex">
            <Separator
              orientation="vertical"
              className="bg-slate-800 w-0.5 mr-10 sm:block hidden "
            />
          </div>
          <div className="flex-col text-3xl w-1/4">
            <h1>Member and President</h1>

            <h1>(2018-2020)</h1>
          </div>
        </div>
        <div className="text-xl">
          <p className="text-xl w-full">
            Started as a memebr in my first year, I fell in love with Enactus
            and took over in my second year. A international society that works
            to promote social enterprise and driving impact. Being there from
            the societies founding, at USW, I was able to help it grow.
          </p>
          <p className="pt-6">
            In my time there we were able to compete in the National Finals
            twice! We also worked on many projects such as waste reuse schemes.
          </p>
        </div>
      </div>

      <div className="p-5">
        <div className="flex w-full justify-between">
          <div className="flex w-3/4">
            <h1 id="cyc" className="text-6xl">
              Cardiff Youth Council
            </h1>
          </div>
          <div className="flex">
            <Separator
              orientation="vertical"
              className="bg-slate-800 w-0.5 mr-10 sm:block hidden "
            />
          </div>
          <div className="flex-col text-3xl w-1/4">
            <h1>Member and vice-chair</h1>

            <h1>(2016-2018)</h1>
          </div>
        </div>
        <div className="text-xl">
          <p className="text-xl w-full">
            Working to represent the views of young people in Cardiff I had many
            opportunites to help improve lives of people in Cardiff. This
            included an international exchange to Germany and many event
            appearances.
          </p>

          <h3 className="pt-6">Here is somethings we worked on: </h3>
          <a href="https://mindhub.wales/">
            <Button className="w-full">
              Mindhub: A mental health platform for young people
            </Button>
          </a>
        </div>
      </div>

      <div className="p-5">
        <div className="flex w-full justify-between">
          <div className="flex w-3/4">
            <h1 id="3d" className="text-6xl">
              3D Printing Hobbiest
            </h1>
          </div>
          <div className="flex">
            <Separator
              orientation="vertical"
              className="bg-slate-800 w-0.5 mr-10 sm:block hidden "
            />
          </div>
          <div className="flex-col text-3xl w-1/4">
            <h1>Modified Ender 3</h1>

            <h1></h1>
          </div>
        </div>
        <div className="text-xl">
          <p className="text-xl w-full">
            Taking some time to enjoy 3D Printing, largely in PLA but
            experimenting with other materials. This includes general fidgets
            and cliches of 3d printing, but also aiming to solve problems in my
            day to day life. This includes things such as cup holders and other
            modifications for my partners wheelchair.
          </p>

          <p className="pt-6">
            This includes some limited work with CAD software to design my own
            stl files including thos designed to work with external
            requirements. This is largely done with tinkerCAD which does what
            the job mostly.
          </p>
        </div>
      </div>
    </div>
  );
};
