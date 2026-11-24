import { PageSection } from "@/components/PageSection";
import { useHashScroll } from "@/hooks/use-hash-scroll";

export const Work = () => {
  useHashScroll();

  return (
    <div className="space-y-4">
      <PageSection
        id="raytheon"
        title="Cyber And Software Academy Enginer"
        meta={["Raytheon", "(2022-2024)"]}
      >
        <p>
          Starting on an introductory academy to rapidly upskill in agile
          software development practices quickly embraced into developing a wide
          range of software tools including being a technical lead on an
          internal project. Although primarily software development also tackled
          things such as testing, compliance and architecture. Alongside plenty
          of work to do knowledge sharing internally.
        </p>
      </PageSection>

      <PageSection
        id="ukaea"
        title="Buisness Systems Database Admin"
        meta={["UK Atomic Energy Authority", "(2020-2021)"]}
      >
        <p>
          A sandwich placement where I was responsible for helping manage and
          support business processes through an ERP system. This included:
          moderate to advanced reporting, working with upgrades, new module
          installation, and system configurations. Also conducted a thorough
          internal compliance and general security audit, and helped with
          general security procedures.
        </p>
      </PageSection>
    </div>
  );
};
