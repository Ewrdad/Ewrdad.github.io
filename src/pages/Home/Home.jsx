import { Toggle } from "@/components/ui/toggle";
import { useState } from "react";
import { BsArrowRightSquareFill, BsArrowRightSquare } from "react-icons/bs";

export const Home = () => {
  const [toggleCode, setToggleCode] = useState(false);
  const [toggleChange, setToggleChange] = useState(false);
  const [toggleImpact, setToggleImpact] = useState(false);

  const buttonClass =
    "h-auto w-full md:w-auto justify-between md:justify-start gap-4 px-3 py-3 sm:p-4 md:p-6 bg-transparent hover:bg-slate-900/10 data-[state=on]:bg-slate-900/15 [&_svg]:size-8 sm:[&_svg]:size-12 md:[&_svg]:size-14";
  const textNameClass = "text-4xl sm:text-6xl lg:text-8xl font-extrabold";
  const panelBaseClass =
    "w-full md:w-1/2 p-4 sm:p-6 md:p-8 border-4 bg-slate-900/60 text-white rounded-md text-base sm:text-xl md:text-2xl leading-relaxed";

  return (
    <div className="w-full flex flex-col gap-6 sm:gap-8 py-2 sm:py-6">
      <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center md:gap-6">
        {
          // MARK: Code
        }
        <Toggle
          className={`${buttonClass} hover:text-red-800 data-[state=on]:text-red-800`}
          pressed={toggleCode}
          onPressedChange={setToggleCode}
        >
          <span className={textNameClass}>Code</span>
          {!toggleCode ? (
            <BsArrowRightSquare className="shrink-0" aria-hidden="true" />
          ) : (
            <BsArrowRightSquareFill className="shrink-0" aria-hidden="true" />
          )}
        </Toggle>

        {toggleCode && (
          <p className={`${panelBaseClass} border-red-800`}>
            Understand the technology and talk in real terms. Sometimes
            simplicity can arrise from just working with the code
          </p>
        )}
      </div>

      {
        // MARK: Change
      }
      <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center md:gap-6">
        <Toggle
          className={`${buttonClass} hover:text-blue-700 data-[state=on]:text-blue-700`}
          pressed={toggleChange}
          onPressedChange={setToggleChange}
        >
          <span className={textNameClass}>Change</span>
          {!toggleChange ? (
            <BsArrowRightSquare className="shrink-0" aria-hidden="true" />
          ) : (
            <BsArrowRightSquareFill className="shrink-0" aria-hidden="true" />
          )}
        </Toggle>

        {toggleChange && (
          <p className={`${panelBaseClass} border-blue-700`}>
            Embracing change and always striving to innovate. Stagnancy is the
            enemy of progress, the world will always move forward and you must
            move with it.
          </p>
        )}
      </div>

      {
        // MARK: Impact
      }
      <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center md:gap-6">
        <Toggle
          className={`${buttonClass} hover:text-green-800 data-[state=on]:text-green-800`}
          pressed={toggleImpact}
          onPressedChange={setToggleImpact}
        >
          <span className={textNameClass}>Impact</span>
          {!toggleImpact ? (
            <BsArrowRightSquare className="shrink-0" aria-hidden="true" />
          ) : (
            <BsArrowRightSquareFill className="shrink-0" aria-hidden="true" />
          )}
        </Toggle>

        {toggleImpact && (
          <p className={`${panelBaseClass} border-green-800 border-solid`}>
            The most important thing in all work is the impact at the end and
            its good not to lose sight of that. Its easy to get lost in
            &quot;pretty&quot; technicalities and you must remain focused on
            impact
          </p>
        )}
      </div>
    </div>
  );
};
