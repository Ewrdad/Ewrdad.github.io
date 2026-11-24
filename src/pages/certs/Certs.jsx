import { PageSection } from "@/components/PageSection";
import { useHashScroll } from "@/hooks/use-hash-scroll";

export const Certs = () => {
  useHashScroll();

  return (
    <div className="space-y-4">
      {
        // MARK: AWS
      }
      <PageSection
        id="aws"
        title="Solutions Architect Associate"
        meta={["Amazon Web Services", "SAA-C03", "(2024-2027)"]}
      >
        <p>
          Growing my knowledge of cloud computing and AWS services. This was a
          significant challenge drawn on my experience working in AWS and some
          intense training. I was able to pass the exam on the first attempt
          luckily! Showing a rewarding pay of reflecting plent of experience in
          the field..
        </p>
      </PageSection>

      <PageSection
        title="Certified Cloud Practitioner"
        meta={["Amazon Web Services", "(2023-2027)"]}
      >
        <p>
          A part of my journey from turning my theoretical cloud knowledge into
          practical experience. This was a great starting point into the world
          of Amazon Web Service
        </p>
      </PageSection>

      {
        // MARK: CompTIA
      }
      <PageSection
        id="comptia"
        title="Security+"
        meta={["CompTIA", "(2023-2026)"]}
      >
        <p>
          A proof that my many years of university square up to an industry
          standard. Taken almost a year after finishing my degree, it was a good
          chance to keep my knowledge fresh and prove to industry and myself
          that I still have the knowledge to apply myself in the context of
          security
        </p>
      </PageSection>

      {
        // MARK: Azure
      }
      <PageSection
        id="azure"
        title="Azure Fundementals"
        meta={["Azure", "(2020)"]}
      >
        <p>
          Taken over COVID lockdown this was my intro into the world of Azure. I
          was able to learn a lot about the platform and how it compares to
          other providers. This was a great way to keep my skills fresh and
          learn about a new platform.
        </p>
      </PageSection>

      <PageSection
        title="Security and Complaince Fundementals"
        meta={["Azure", "(2020)"]}
      >
        <p>
          A good way to apply security knowledge to a new platform. This was
          good to not just highlight that these tools exist but also names and
          how specific ones work.
        </p>
      </PageSection>

      <PageSection title="AI Fundementals" meta={["Azure", "(2020)"]}>
        <p>
          Not gonna lie this was mainly for fun. I do enjoy learning about AI
          and this served as a good intro into cloud solutions for AI and
          general AI concepts.
        </p>
      </PageSection>
    </div>
  );
};
