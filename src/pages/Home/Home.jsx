import { Toggle } from "@/components/ui/toggle";
import { useState } from "react";
import { BsArrowRightSquareFill, BsArrowRightSquare } from "react-icons/bs";

export const Home = () => {
  const [toggleCode, setToggleCode] = useState(false);
  const [toggleChange, setToggleChange] = useState(false);
  const [toggleImpact, setToggleImpact] = useState(false);

  const buttonClass = "h-full align-middle flex lg:p-10 md:p-2 pl-0  ";
  const textNameClass =
    "lg:text-9xl md:text-9xl sm:text-6xl text-6xl font-extrabold";

  return (
    <div className="self-start w-[83vw] min-w-full h-auto justify-between pt-5 items-left">
      <div className="h-1/3 flex items-center p-2 sm:flex-row flex-col">
        {
          // MARK: Code
        }
        <Toggle
          className={buttonClass + "hover:text-red-800"}
          onClick={() => {
            setToggleCode((prevValue) => !prevValue);
          }}
        >
          <p className={textNameClass}>Code</p>
          <p className={textNameClass}>
            {!toggleCode ? (
              <BsArrowRightSquare className="text-8xl scale-[2] m-5" />
            ) : (
              <BsArrowRightSquareFill className="text-8xl scale-[2] m-5" />
            )}
          </p>
        </Toggle>

        {toggleCode && (
          <p className="align-middle w-full sm:w-1/2 p-10 border-4 border-red-800 bg-slate-800/40 text-2xl">
            Understand the technology and talk in real terms. Sometimes
            simplicity can arrise from just working with the code
          </p>
        )}
      </div>

      {
        // MARK: Change
      }

      <div className="h-1/3 flex items-center p-2 sm:flex-row flex-col">
        <Toggle
          className={buttonClass + "hover:text-blue-700"}
          onClick={() => {
            setToggleChange((prevValue) => !prevValue);
          }}
        >
          <p className={textNameClass}>Change</p>
          <p className={textNameClass}>
            {!toggleChange ? (
              <BsArrowRightSquare className="text-8xl scale-[2] m-5" />
            ) : (
              <BsArrowRightSquareFill className="text-8xl scale-[2] m-5" />
            )}
          </p>
        </Toggle>

        {toggleChange && (
          <div className="align-middle w-full sm:w-1/2  border-4 border-blue-700 p-10 bg-slate-800/40 text-2xl">
            Embracing change and always striving to innovate. Stagnancy is the
            enemy of progress, the world will always move forward and you must
            move with it.
          </div>
        )}
      </div>

      {
        // MARK: Impact
      }
      <div className="h-1/3 flex items-center p-2 sm:flex-row flex-col">
        <Toggle
          className={buttonClass + "hover:text-green-800"}
          onClick={() => {
            setToggleImpact((prevValue) => !prevValue);
          }}
        >
          <p className={textNameClass}>Impact</p>
          <p className={textNameClass}>
            {!toggleImpact ? (
              <BsArrowRightSquare className="text-8xl scale-[2] m-5" />
            ) : (
              <BsArrowRightSquareFill className="text-8xl scale-[2] m-5" />
            )}
          </p>
        </Toggle>

        {toggleImpact && (
          <p className="align-middle w-full sm:w-1/2 border-green-800 border-solid p-10 border-4 bg-slate-800/40 text-2xl">
            The most important thing in all work is the impact at the end and
            its good not to lose sight of that. Its easy to get lost in "pretty"
            technicalities and you must remain focused on impact
          </p>
        )}
      </div>
    </div>
  );
};
