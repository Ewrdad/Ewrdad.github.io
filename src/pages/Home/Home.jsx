import { Toggle } from "@/components/ui/toggle";
import { useState } from "react";
import { BsArrowRightSquareFill, BsArrowRightSquare } from "react-icons/bs";

const PILLARS = [
  {
    id: "code",
    label: "Code",
    toggleAccentClass: "hover:text-red-800 data-[state=on]:text-red-800",
    panelBorderClass: "border-red-800",
    description:
      "Understand the technology and talk in real terms. Sometimes simplicity can arrise from just working with the code",
  },
  {
    id: "change",
    label: "Change",
    toggleAccentClass: "hover:text-blue-700 data-[state=on]:text-blue-700",
    panelBorderClass: "border-blue-700",
    description:
      "Embracing change and always striving to innovate. Stagnancy is the enemy of progress, the world will always move forward and you must move with it.",
  },
  {
    id: "impact",
    label: "Impact",
    toggleAccentClass: "hover:text-green-800 data-[state=on]:text-green-800",
    panelBorderClass: "border-green-800 border-solid",
    description:
      'The most important thing in all work is the impact at the end and its good not to lose sight of that. Its easy to get lost in "pretty" technicalities and you must remain focused on impact',
  },
];

const BUTTON_BASE_CLASS =
  "h-auto w-full md:w-auto justify-between md:justify-start gap-4 px-3 py-3 sm:p-4 md:p-6 bg-transparent hover:bg-slate-900/10 data-[state=on]:bg-slate-900/15 [&_svg]:size-8 sm:[&_svg]:size-12 md:[&_svg]:size-14";
const TITLE_CLASS = "text-4xl sm:text-6xl lg:text-8xl font-extrabold";
const PANEL_BASE_CLASS =
  "w-full md:w-1/2 p-4 sm:p-6 md:p-8 border-4 bg-slate-900/60 text-white rounded-md text-base sm:text-xl md:text-2xl leading-relaxed";

export const Home = () => {
  const [openPillars, setOpenPillars] = useState({});

  const handleToggle = (id, pressed) => {
    setOpenPillars((prev) => ({ ...prev, [id]: pressed }));
  };

  return (
    <div className="w-full flex flex-col gap-6 sm:gap-8 py-2 sm:py-6">
      {PILLARS.map((pillar) => {
        const isOpen = Boolean(openPillars[pillar.id]);
        const panelId = `pillar-panel-${pillar.id}`;

        return (
          <div
            key={pillar.id}
            className="flex flex-col items-stretch gap-3 md:flex-row md:items-center md:gap-6"
          >
            <Toggle
              className={`${BUTTON_BASE_CLASS} ${pillar.toggleAccentClass}`}
              pressed={isOpen}
              onPressedChange={(pressed) => handleToggle(pillar.id, pressed)}
              aria-controls={panelId}
            >
              <span className={TITLE_CLASS}>{pillar.label}</span>
              {!isOpen ? (
                <BsArrowRightSquare className="shrink-0" aria-hidden="true" />
              ) : (
                <BsArrowRightSquareFill
                  className="shrink-0"
                  aria-hidden="true"
                />
              )}
            </Toggle>

            {isOpen && (
              <p
                id={panelId}
                className={`${PANEL_BASE_CLASS} ${pillar.panelBorderClass}`}
              >
                {pillar.description}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};
