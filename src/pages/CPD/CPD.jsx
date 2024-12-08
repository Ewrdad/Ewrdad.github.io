import  { useEffect } from "react";
import { useLocation } from "react-router";
import { AccordionContent, Accordion, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


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
            <h1>Continuing Professional Development</h1>
            <p>Here are some of the CPD activities I have completed.</p>

            <h1 id="bcs" className="text-9xl">British Computer Society
            </h1>
    <h2 className="text-6xl">Membership</h2>
    <br />
    <p className="text-xl">
Although membership of BCS is often described only as beneficial as the effort you put in, I have found it to be a great way to keep up to date with the latest trends in the industry. I have been able to attend many events and webinars that have helped me to keep my skills fresh and learn about new technologies. I have also been able to network with other professionals in the industry and learn from their experiences. I have found that being a member of BCS has helped me to stay motivated and focused on my career goals.
    </p>
    <br />
    <h1 id="online" className="text-9xl">Online Training</h1>
    <h2 className="text-6xl">Udemy</h2>
    <br />
    <p className="text-xl">
This is a place to just list various course I have taken on Udemy which are part of my continued efforts to work towards self growth
    
    
    </p>
    
    <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Ultimate AWS Certified Solutions Architect Associate 2025</AccordionTrigger>
    <AccordionContent>
    <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-87b59a11-95ee-4ffd-a9d7-5121f4058ec7.jpg" alt="Udemy Certificate" />

    </AccordionContent>
  </AccordionItem>
  
</Accordion>

    <br />

</div>
    );
}