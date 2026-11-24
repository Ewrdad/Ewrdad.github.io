import {
  AccordionContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageSection } from "@/components/PageSection";
import { useHashScroll } from "@/hooks/use-hash-scroll";
import RISKMNG01 from "./RISKMNG01.png";

export const CPD = () => {
  useHashScroll();

  return (
    <div className="space-y-4">
      <PageSection id="bcs" title="BCS Membership" meta={["(2024+)"]}>
        <p>
          Although membership of BCS is often described only as beneficial as
          the effort you put in, I have found it to be a great way to keep up to
          date with the latest trends in the industry. I have been able to
          attend many events and webinars that have helped me to keep my skills
          fresh and learn about new technologies. I have also been able to
          network with other professionals in the industry and learn from their
          experiences. I have found that being a member of BCS has helped me to
          stay motivated and focused on my career goals.
        </p>
      </PageSection>

      <PageSection id="online" title="Online Training" meta={["Udemy"]}>
        <p>
          This is a place to just list various course I have taken on Udemy
          which are part of my continued efforts to work towards self growth
        </p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-slate-800/40">
            <AccordionTrigger>
              Ultimate AWS Certified Solutions Architect Associate 2025
            </AccordionTrigger>
            <AccordionContent>
              <img
                src="https://udemy-certificate.s3.amazonaws.com/image/UC-87b59a11-95ee-4ffd-a9d7-5121f4058ec7.jpg"
                alt="Udemy Certificate"
                loading="lazy"
                className="w-full h-auto max-w-full rounded-md"
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </PageSection>

      <PageSection title="Online Training" meta={["Packt"]}>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-slate-800/40">
            <AccordionTrigger>
              Risk Management for Cyber Security Managers
            </AccordionTrigger>
            <AccordionContent>
              <img
                src={RISKMNG01}
                alt="Risk Management for Cyber Security Managers Certificate"
                loading="lazy"
                className="w-full h-auto max-w-full rounded-md"
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </PageSection>
    </div>
  );
};
