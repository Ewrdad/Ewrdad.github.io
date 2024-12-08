import { Toggle } from "@/components/ui/toggle";
import { useState } from "react";

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
        <Toggle
          className={buttonClass + "hover:text-red-800"}
          onClick={() => {
            setToggleCode((prevValue) => !prevValue);
          }}
        >
          <p className={textNameClass}>Code</p>
          <p className={textNameClass}>{!toggleCode ? "🞂" : "🢖"}</p>
        </Toggle>

        {toggleCode && (
          <p className="align-middle w-full sm:w-1/2 p-10 border-4 border-red-800 bg-slate-800/40 text-2xl">
            Coding this forward
          </p>
        )}
      </div>

      <div className="h-1/3 flex items-center p-2 sm:flex-row flex-col">
        <Toggle
          className={buttonClass + "hover:text-blue-700"}
          onClick={() => {
            setToggleChange((prevValue) => !prevValue);
          }}
        >
          <p className={textNameClass}>Change</p>
          <p className={textNameClass}>{!toggleChange ? "🞂" : "🢖"}</p>
        </Toggle>

        {toggleChange && (
          <div className="align-middle w-full sm:w-1/2  border-4 border-blue-700 p-10 bg-slate-800/40 text-2xl">
            Embracing change Embracing change Embracing change Embracing change
            Embracing change Embracing change Embracing change Embracing change
            Embracing change Embracing change Embracing change Embracing change
            Embracing change
          </div>
        )}
      </div>

      <div className="h-1/3 flex items-center p-2 sm:flex-row flex-col">
        <Toggle
          className={buttonClass + "hover:text-green-800"}
          onClick={() => {
            setToggleImpact((prevValue) => !prevValue);
          }}
        >
          <p className={textNameClass}>Impact</p>
          <p className={textNameClass}>{!toggleImpact ? "🞂" : "🢖"}</p>
        </Toggle>

        {toggleImpact && (
          <p className="align-middle w-full sm:w-1/2 border-green-800 border-solid p-10 border-4 bg-slate-800/40 text-2xl">
            Impacting the future
          </p>
        )}
      </div>
    </div>
  );
};
