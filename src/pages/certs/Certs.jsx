import  { useEffect } from "react";
import { useLocation } from "react-router";


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
            <h1>Certifications</h1>
            <p>Here are some of the certifications I have received.</p>
            <h1 id="aws" className="text-9xl">Amazon Web Services</h1>
    <h2 className="text-6xl">Solutions Architect - Assocaite (SAA-C03)</h2>
    <br />
    <p className="text-xl">
Growing my knowledge of cloud computing and AWS services. This was a significant challenge drawn on my experience working in AWS and some intense training. I was able to pass the exam on the first attempt luckily! Showing a rewarding pay of reflecting plent of experience in the field..
    </p>
    <br />
    <h2 className="text-6xl">Certified Cloud Practitioner</h2>
    <br />
    <p className="text-xl">
A part of my journey from turning my theoretical cloud knowledge into practical experience. This was a great starting point into the world of Amazon Web Service
    </p>
    <br />
    <h1 id="comptia" className="text-9xl">CompTIA</h1>

    <h2 className="text-6xl">Security+</h2>
    <br />
    <p className="text-xl">
  A proof that my many years of university square up to an industry standard.  Taken almost a year after finishing my degree, it was a good chance to keep my knowledge fresh and prove to industry and myself that I still have the knowledge to apply myself in the context of security
    </p>
    <br />
    <h1 id="azure" className="text-9xl">Azure</h1>

    <h2 className="text-6xl">Azure Fundementals</h2>
    <br />
    <p className="text-xl">
Taken over COVID lockdown this was my intro into the world of Azure. I was able to learn a lot about the platform and how it compares to other providers. This was a great way to keep my skills fresh and learn about a new platform.
    </p>

    <h2 className="text-6xl">Security and Complaince Fundementals</h2>
    <br />
    <p className="text-xl">
      A good way to apply security knowledge to a new platform. This was good to not just highlight that these tools exist but also names and how specific ones work. 
    </p>
    <br />

    <h2 className="text-6xl">AI fundementals</h2>
    <br />
    <p className="text-xl">
Not gonna lie this was mainly for fun. I do enjoy learning about AI and this served as a good intro into cloud solutions for AI and general AI concepts.
    </p>
    <br />
        </div>
    );
}