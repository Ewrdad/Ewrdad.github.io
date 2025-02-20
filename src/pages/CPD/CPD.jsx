import { useEffect } from "react";
import { useLocation } from "react-router";
import {
  AccordionContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import RISKMNG01 from "./RISKMNG01.png";

export const CPD = () => {
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
            <h1 id="bcs" className="text-6xl">
              BCS Membership
            </h1>
          </div>
          <div className="flex">
            <Separator
              orientation="vertical"
              className="bg-slate-800 w-0.5 mr-10 sm:block hidden "
            />
          </div>
          <div className="flex-col text-3xl w-1/4">
            <h1>(2024+)</h1>
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
            <h1 id="online" className="text-6xl">
              Online Training
            </h1>
          </div>
          <div className="flex">
            <Separator
              orientation="vertical"
              className="bg-slate-800 w-0.5 mr-10 sm:block hidden "
            />
          </div>
          <div className="flex-col text-3xl w-1/4">
            <h1>Udemy</h1>
          </div>
        </div>
        <div>
          <p className="text-xl">
            This is a place to just list various course I have taken on Udemy
            which are part of my continued efforts to work towards self growth
          </p>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Ultimate AWS Certified Solutions Architect Associate 2025
              </AccordionTrigger>
              <AccordionContent>
                <img
                  src="https://udemy-certificate.s3.amazonaws.com/image/UC-87b59a11-95ee-4ffd-a9d7-5121f4058ec7.jpg"
                  alt="Udemy Certificate"
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="p-5">
        <div className="flex w-full justify-between">
          <div className="flex w-3/4">
            <h1 className="text-6xl">Online Training</h1>
          </div>
          <div className="flex">
            <Separator
              orientation="vertical"
              className="bg-slate-800 w-0.5 mr-10 sm:block hidden "
            />
          </div>
          <div className="flex-col text-3xl w-1/4">
            <h1>Packt</h1>
          </div>
        </div>

        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Risk Management for Cyber Security Managers
              </AccordionTrigger>
              <AccordionContent>
                <img src={RISKMNG01} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
