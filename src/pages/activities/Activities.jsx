import { Button } from "@/components/ui/button";
import { PageSection } from "@/components/PageSection";
import { useHashScroll } from "@/hooks/use-hash-scroll";

export const Activities = () => {
  useHashScroll();

  return (
    <div className="space-y-4">
      <PageSection
        id="enactus"
        title="Enactus USW"
        meta={["Member and President", "(2018-2020)"]}
      >
        <p>
          Started as a memebr in my first year, I fell in love with Enactus and
          took over in my second year. A international society that works to
          promote social enterprise and driving impact. Being there from the
          societies founding, at USW, I was able to help it grow.
        </p>
        <p>
          In my time there we were able to compete in the National Finals twice!
          We also worked on many projects such as waste reuse schemes.
        </p>
      </PageSection>

      <PageSection
        id="cyc"
        title="Cardiff Youth Council"
        meta={["Member and vice-chair", "(2016-2018)"]}
      >
        <p>
          Working to represent the views of young people in Cardiff I had many
          opportunites to help improve lives of people in Cardiff. This included
          an international exchange to Germany and many event appearances.
        </p>

        <h3 className="font-semibold pt-2">Here is somethings we worked on:</h3>
        <a
          href="https://mindhub.wales/"
          target="_blank"
          rel="noreferrer"
          className="block"
        >
          <Button className="w-full whitespace-normal h-auto py-2.5 text-center">
            Mindhub: A mental health platform for young people
          </Button>
        </a>
      </PageSection>

      <PageSection
        id="3d"
        title="3D Printing Hobbiest"
        meta={["Modified Ender 3"]}
      >
        <p>
          Taking some time to enjoy 3D Printing, largely in PLA but
          experimenting with other materials. This includes general fidgets and
          cliches of 3d printing, but also aiming to solve problems in my day to
          day life. This includes things such as cup holders and other
          modifications for my partners wheelchair.
        </p>

        <p>
          This includes some limited work with CAD software to design my own stl
          files including thos designed to work with external requirements. This
          is largely done with tinkerCAD which does what the job mostly.
        </p>
      </PageSection>
    </div>
  );
};
