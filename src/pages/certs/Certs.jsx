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
    <h2 className="text-6xl">Solutions Architect Assocaite (SAA-C03)</h2>
    <br />
    <p className="text-xl">
    Starting on an introductory academy to rapidly upskill in agile software development practices quickly embraced into developing  a wide range of software tools including being a technical lead on an internal project. Although primarily software development also tackled things such as testing, compliance  and architecture. Alongside plenty of work to do knowledge sharing internally. 

    </p>
    <br />
    <h2 className="text-6xl">Certified Cloud Practitioner</h2>
    <br />
    <p className="text-xl">
    Starting on an introductory academy to rapidly upskill in agile software development practices quickly embraced into developing  a wide range of software tools including being a technical lead on an internal project. Although primarily software development also tackled things such as testing, compliance  and architecture. Alongside plenty of work to do knowledge sharing internally. 

    </p>
    <br />
    <h1 id="comptia" className="text-9xl">CompTIA</h1>

    <h2 className="text-6xl">Security+</h2>
    <br />
    <p className="text-xl">
    Starting on an introductory academy to rapidly upskill in agile software development practices quickly embraced into developing  a wide range of software tools including being a technical lead on an internal project. Although primarily software development also tackled things such as testing, compliance  and architecture. Alongside plenty of work to do knowledge sharing internally. 

    </p>
    <br />
    <h1 id="azure" className="text-9xl">Azure</h1>

    <h2 className="text-6xl">fundemals</h2>
    <br />
    <p className="text-xl">
    Starting on an introductory academy to rapidly upskill in agile software development practices quickly embraced into developing  a wide range of software tools including being a technical lead on an internal project. Although primarily software development also tackled things such as testing, compliance  and architecture. Alongside plenty of work to do knowledge sharing internally. 

    </p>

    <h2 className="text-6xl">security and complaince fundementals</h2>
    <br />
    <p className="text-xl">
    Starting on an introductory academy to rapidly upskill in agile software development practices quickly embraced into developing  a wide range of software tools including being a technical lead on an internal project. Although primarily software development also tackled things such as testing, compliance  and architecture. Alongside plenty of work to do knowledge sharing internally. 

    </p>
    <br />

    <h2 className="text-6xl">AI fundementals</h2>
    <br />
    <p className="text-xl">
    Starting on an introductory academy to rapidly upskill in agile software development practices quickly embraced into developing  a wide range of software tools including being a technical lead on an internal project. Although primarily software development also tackled things such as testing, compliance  and architecture. Alongside plenty of work to do knowledge sharing internally. 

    </p>
    <br />
        </div>
    );
}