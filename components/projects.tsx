import { useState } from "react"
import Activities from "./activities"

const Projects = () => {
    const [toggleActivities,settoggleActivities] = useState(false)
    const [toggleActivitiesTransition,settoggleActivitiesTransition] = useState(false)
    const handleToggle=()=>{
        settoggleActivities(!toggleActivities)
        setTimeout(()=>{
            settoggleActivitiesTransition(!toggleActivitiesTransition)
        },100)
    }
    return(
        <div className="w-full space-y-3">
            <div className="w-full bg-gray-200 flex items-center justify-between rounded-md">
                <h1 className="text-xl font-bold px-2">Project Head</h1>
                <button onClick={()=>handleToggle()} className="bg-gradient-to-tr from-yellow-400 to-orange-400 py-2 w-16 rounded-r-md">
                    {/* <i className="fa-solid fa-angle-up"></i> */}
                    <h1 className="text-2xl font-bold">{`${toggleActivities == false ? `+` : `-` }`}</h1>
                </button>
            </div>
            <div className={`w-full space-y-1 ${toggleActivities == false ? `hidden` : `block` }`}>
                {[...Array(5)].map((item:any,key:any)=>{
                    return(
                        <div className={`transform transition duration-300 ${ toggleActivitiesTransition ? `translate-x-0 skew-x-0` : `translate-x-12 skew-x-12`}`} key={key} style={{transitionDelay:`${key*.2}s`}}>
                            <Activities/>
                        </div>
                    )
                })}
            </div>
            <button className="flex items-center justify-center px-3 py-2 rounded-md bg-gradient-to-tl from-red-500 to-black text-white hover:bg-gradient-to-br hover:from-black hover:to-black hover:duration-300">
                <h1>Add more</h1>
            </button>
        </div>
    )
}
export default Projects