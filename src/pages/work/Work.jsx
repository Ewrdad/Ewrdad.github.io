import { useEffect } from "react"
import { useLocation } from "react-router"


export const Work = () => {

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

    return <>
    <h1 id="raytheon" className="text-9xl">Raytheon(2022-2024)</h1>
    <h2 className="text-6xl">Cyber & Software Academy Engineer</h2>
    <br />
    <p className="text-xl">
    Starting on an introductory academy to rapidly upskill in agile software development practices quickly embraced into developing  a wide range of software tools including being a technical lead on an internal project. Although primarily software development also tackled things such as testing, compliance  and architecture. Alongside plenty of work to do knowledge sharing internally. 

    </p>
    <br />

    <h1 id="ukaea" className="text-9xl">UK Atomic Energy Authority(2020-2021)</h1>
    <h2 className="text-6xl">Buisness systems database admin</h2>
    <br />
    <p className="text-xl">
    A sandwich placement where I was responsible for helping manage and support business processes through an ERP system. This included: moderate to advanced reporting, working with upgrades, new module installation, and system configurations. Also conducted a thorough internal compliance and general security audit, and helped with general security procedures.
    </p>
    <br />

    </>

}