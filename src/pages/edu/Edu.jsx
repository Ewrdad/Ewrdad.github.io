import  { useEffect } from "react";
import { useLocation } from "react-router";

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
            <h1>Education</h1>
            <p>Here are some of the educational activities I have completed.</p>

            <h1 id="bcs" className="text-9xl">BSc Computer Security
            </h1>
    <h2 className="text-6xl">Degree</h2>
    <br />
    <p className="text-xl">
    Starting on an introductory academy to rapidly upskill in agile software development practices quickly embraced into developing  a wide range of software tools including being a technical lead on an internal project. Although primarily software development also tackled things such as testing, compliance  and architecture. Alongside plenty of work to do knowledge sharing internally. 

    </p>
    <br />

    <h1 id="bcs" className="text-9xl">Cardiff High School
            </h1>
    <h2 className="text-6xl">A levels + GCSEs</h2>
    <br />
    <p className="text-xl">
    Starting on an introductory academy to rapidly upskill in agile software development practices quickly embraced into developing  a wide range of software tools including being a technical lead on an internal project. Although primarily software development also tackled things such as testing, compliance  and architecture. Alongside plenty of work to do knowledge sharing internally. 

    </p>
    <br />

            </div>


    );
}