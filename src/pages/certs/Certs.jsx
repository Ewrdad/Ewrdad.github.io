import { useEffect } from "react";
import { useLocation } from "react-router";
import { Separator } from "@/components/ui/separator";

export const Certs = () => {
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
            <h1 id="raytheon" className="text-6xl">
              Solutions Architect Associate
            </h1>
          </div>
          <div className="flex">
            <Separator
              orientation="vertical"
              className="bg-slate-800 w-0.5 mr-10 sm:block hidden "
            />
          </div>
          <div className="flex-col text-3xl w-1/4">
            <h1>Amazon Web Services</h1>
            <h1>SAA-C03</h1>

            <h1>(2024-2027)</h1>
          </div>
        </div>
        <div>
          <p className="text-xl w-full">
            Growing my knowledge of cloud computing and AWS services. This was a
            significant challenge drawn on my experience working in AWS and some
            intense training. I was able to pass the exam on the first attempt
            luckily! Showing a rewarding pay of reflecting plent of experience
            in the field..
          </p>
        </div>
      </div>

      <div className="p-5">
        <div className="flex w-full justify-between">
          <div className="flex w-3/4">
            <h1 id="raytheon" className="text-6xl">
              Certified Cloud Practitioner
            </h1>
          </div>
          <div className="flex">
            <Separator
              orientation="vertical"
              className="bg-slate-800 w-0.5 mr-10 sm:block hidden "
            />
          </div>
          <div className="flex-col text-3xl w-1/4">
            <h1>Amazon Web Services</h1>

            <h1>(2023-2027)</h1>
          </div>
        </div>
        <div>
          <p className="text-xl w-full">
            A part of my journey from turning my theoretical cloud knowledge
            into practical experience. This was a great starting point into the
            world of Amazon Web Service
          </p>
        </div>
      </div>

      <div className="p-5">
        <div className="flex w-full justify-between">
          <div className="flex w-3/4">
            <h1 id="raytheon" className="text-6xl">
              Security+
            </h1>
          </div>
          <div className="flex">
            <Separator
              orientation="vertical"
              className="bg-slate-800 w-0.5 mr-10 sm:block hidden "
            />
          </div>
          <div className="flex-col text-3xl w-1/4">
            <h1>CompTIA</h1>

            <h1>(2023-2027)</h1>
          </div>
        </div>
        <div>
          <p className="text-xl w-full">
            A proof that my many years of university square up to an industry
            standard. Taken almost a year after finishing my degree, it was a
            good chance to keep my knowledge fresh and prove to industry and
            myself that I still have the knowledge to apply myself in the
            context of security
          </p>
        </div>
      </div>

      <div className="p-5">
        <div className="flex w-full justify-between">
          <div className="flex w-3/4">
            <h1 id="raytheon" className="text-6xl">
              Azure Fundementals
            </h1>
          </div>
          <div className="flex">
            <Separator
              orientation="vertical"
              className="bg-slate-800 w-0.5 mr-10 sm:block hidden "
            />
          </div>
          <div className="flex-col text-3xl w-1/4">
            <h1>Azure</h1>

            <h1>(2020)</h1>
          </div>
        </div>
        <div>
          <p className="text-xl w-full">
            Taken over COVID lockdown this was my intro into the world of Azure.
            I was able to learn a lot about the platform and how it compares to
            other providers. This was a great way to keep my skills fresh and
            learn about a new platform.
          </p>
        </div>
      </div>

      <div className="p-5">
        <div className="flex w-full justify-between">
          <div className="flex w-3/4">
            <h1 id="raytheon" className="text-6xl">
              Security and Complaince Fundementals
            </h1>
          </div>
          <div className="flex">
            <Separator
              orientation="vertical"
              className="bg-slate-800 w-0.5 mr-10 sm:block hidden "
            />
          </div>
          <div className="flex-col text-3xl w-1/4">
            <h1>Azure</h1>

            <h1>(2020)</h1>
          </div>
        </div>
        <div>
          <p className="text-xl w-full">
            A good way to apply security knowledge to a new platform. This was
            good to not just highlight that these tools exist but also names and
            how specific ones work.
          </p>
        </div>
      </div>

      <div className="p-5">
        <div className="flex w-full justify-between">
          <div className="flex w-3/4">
            <h1 id="raytheon" className="text-6xl">
              AI Fundementals
            </h1>
          </div>
          <div className="flex">
            <Separator
              orientation="vertical"
              className="bg-slate-800 w-0.5 mr-10 sm:block hidden "
            />
          </div>
          <div className="flex-col text-3xl w-1/4">
            <h1>Azure</h1>

            <h1>(2020)</h1>
          </div>
        </div>
        <div>
          <p className="text-xl w-full">
            Not gonna lie this was mainly for fun. I do enjoy learning about AI
            and this served as a good intro into cloud solutions for AI and
            general AI concepts.
          </p>
        </div>
      </div>
    </div>
  );
};
