import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import Activities from "./activities"

import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

type MyProps = {
    setProjectView:Function
    handleAddActivity:Function
    handleActivity:Function
    toDoListData:any
    projectView:any
}

const Project = (props:MyProps) => {
    const [toggleActivities,settoggleActivities] = useState(true)
    const [toggleActivitiesTransition,settoggleActivitiesTransition] = useState(false)
    const handleToggle=()=>{
        settoggleActivities(!toggleActivities)
        setTimeout(()=>{
            settoggleActivitiesTransition(!toggleActivitiesTransition)
        },100)
    }
    useEffect(()=>{
        settoggleActivitiesTransition(true);
    },[])

    return(
        <div className="w-full space-y-3">
            <div className="w-full bg-gray-200 flex items-center justify-between rounded-md">
                <h1 className="text-xl font-bold px-2">{props.toDoListData?.[props.projectView]?.projectName}</h1>
                <button onClick={()=>handleToggle()} className="bg-gradient-to-tr from-yellow-400 to-orange-400 py-2 w-16 rounded-r-md">
                    <FontAwesomeIcon icon={faAngleUp} className={`${toggleActivities && `rotate-180` } transition duration-500`}/>
                </button>
            </div>
            <div className={`w-full space-y-1 ${toggleActivities == false ? `hidden` : `block` }`}>
                {props.toDoListData?.[props.projectView]?.tasks.map((item:any,key:any)=>{
                    return(
                        <div className={`transform transition duration-300 ${ toggleActivitiesTransition ? `translate-x-0 skew-x-0` : `translate-x-12 skew-x-12`}`} key={key} style={{transitionDelay:`${key*.2}s`}}>
                            <Activities
                                slNo={key}
                                content={item.activity}
                                status={item.finishStatus}
                                handleActivity={props.handleActivity}
                            />
                        </div>
                    )
                })}
            </div>
            <div className="flex items-center justify-between space-x-3">
                <button onClick={()=>props.handleAddActivity && props.handleAddActivity()} className="flex items-center justify-center px-3 py-2 rounded-md bg-gradient-to-tl from-red-500 to-black text-white hover:bg-gradient-to-br hover:from-black hover:to-black">
                    <h1>Add more</h1>
                </button>
                <button onClick={()=>props.setProjectView && props.setProjectView("")} className="flex items-center justify-center px-3 py-2 rounded-md bg-gradient-to-tl from-red-500 to-black text-white hover:bg-gradient-to-br hover:from-black hover:to-black">
                    <h1>Back To Projects</h1>
                </button>
            </div>
        </div>
    )
}
export default Project