import { Toggle } from "@/components/ui/toggle"
import { useState } from "react"


export const Home = () => {
    const [toggleCode, setToggleCode] = useState(false)
    const [toggleChange, setToggleChange] = useState(false)
    const [toggleImpact, setToggleImpact] = useState(false)


    return (

        <div className="self-start w-screen h-[90vh] justify-between bg-slate-500 pt-5 ">

            <div className="h-1/3 flex items-center">

            <Toggle className="text-[30vh]  h-full align-middle hover:text-slate-700 flex pb-10" onClick={() => {setToggleCode((prevValue)=>!prevValue)}}>
            <p className="text-[30vh]">Code</p>
            <p className="text-9xl">{!toggleCode ? "🞂" : "🢖"}</p>
            </Toggle>

            {
                toggleCode && <p className="align-middle flex">
                    Coding this forward
                    
                </p>
}
            </div>

            <div className="h-1/3 flex items-center">

            <Toggle className="text-[30vh] h-full align-middle hover:text-slate-700 pb-10" onClick={() => {setToggleChange((prevValue)=>!prevValue)}}>
            <p className="text-[30vh]">Change</p>
            <p className="text-9xl">{!toggleChange ? "🞂" : "🢖"}</p>

            </Toggle>

{
                toggleChange && <p className="align-middle flex">

                    Embracing change
                </p>
}
            </div>

            <div className="h-1/3 flex items-center">

            <Toggle className=" h-full align-middle hover:text-slate-700 pb-10 items-center" onClick={() => {setToggleImpact((prevValue)=>!prevValue)}}>
                <p className="text-[30vh]">Impact</p>
                <p className="text-9xl">{!toggleImpact ? "🞂" : "🢖"}</p>

                </Toggle>


{
                toggleImpact && <p className="align-middle flex">
                        
                        Impacting the future
                </p>
}

            </div>

        </div>
    )
}