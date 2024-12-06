import { Toggle } from "@/components/ui/toggle"
import { useState } from "react"


export const Home = () => {
    const [toggleCode, setToggleCode] = useState(false)
    const [toggleChange, setToggleChange] = useState(false)
    const [toggleImpact, setToggleImpact] = useState(false)

    const buttonClass = "h-full align-middle hover:text-slate-700 flex lg:p-10 md:p-2 pl-0"
const textNameClass = "lg:text-9xl md:text-9xl sm:text-6xl text-6xl"

    return (

        <div className="self-start w-screen h-auto justify-between pt-5 items-left">

            <div className="h-1/3 flex items-center p-2 sm:flex-row flex-col">

            <Toggle className={buttonClass} onClick={() => {setToggleCode((prevValue)=>!prevValue)}}>
            <p className={textNameClass}>Code</p>
            <p className={textNameClass}>{!toggleCode ? "🞂" : "🢖"}</p>
            </Toggle>

            {
                toggleCode && <p className="align-middle w-full sm:w-1/2">
                    Coding this forward
                    
                </p>
}
            </div>

            <div className="h-1/3 flex items-center p-2 sm:flex-row flex-col">

            <Toggle className={buttonClass} onClick={() => {setToggleChange((prevValue)=>!prevValue)}}>
            <p className={textNameClass}>Change</p>
            <p className={textNameClass}>{!toggleChange ? "🞂" : "🢖"}</p>

            </Toggle>

{
                toggleChange && <div className="align-middle w-full sm:w-1/2 ">

                    Embracing change
                    Embracing change
                    Embracing change
                    Embracing change
                    Embracing change
                    Embracing change
                    Embracing change
                    Embracing change 
                    Embracing change
                    Embracing change
                    Embracing change
                    Embracing change
                    Embracing change

                </div>
}
            </div>

            <div className="h-1/3 flex items-center p-2 sm:flex-row flex-col">

            <Toggle className={buttonClass} onClick={() => {setToggleImpact((prevValue)=>!prevValue)}}>
                <p className={textNameClass}>Impact</p>
                <p className={textNameClass}>{!toggleImpact ? "🞂" : "🢖"}</p>

                </Toggle>


{
                toggleImpact && <p className="align-middle w-full sm:w-1/2">
                        
                        Impacting the future
                </p>
}

            </div>

        </div>
    )
}