import { PageSection } from "@/components/PageSection";
import { useHashScroll } from "@/hooks/use-hash-scroll";

export const Edu = () => {
  useHashScroll();

  return (
    <div className="space-y-4">
      <PageSection
        id="uni"
        title="[2:1] BSc Computer Security"
        meta={["University of South Wales", "(2018-2022)"]}
      >
        <p>
          A sandwhich bachelors degree based in Pontypridd. Learning skills from
          Cryptography, to software development and with a keen focus on
          Penetration testing.
        </p>
      </PageSection>

      <PageSection
        id="chs"
        title="GCSEs + A levels"
        meta={["Cardiff High School", "(2014-2018)"]}
      >
        <p>
          GCSE: Computer Science, Maths, Triple Science, English, Welsh, RP,
          Textiles, Economics, More I cant remember
        </p>
        <p>
          A levels: Law, Buisness Studies, Economics (Also continued studying
          Computer Science, attending half of the lessons)
        </p>
      </PageSection>
    </div>
  );
};
