import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type MyProps = {
    slNo:number,
    content:string
    status:boolean
    handleActivity:Function
}

const Activities = (props:MyProps) => {
    return(
        <div className="flex items-center justify-between h-10 border">
            <div className="w-16 h-full bg-transparent flex items-center justify-center">
                {props.slNo+1}
            </div>
            <div className="w-full h-full bg-transparent flex items-center font-semibold">
                <input type="text" onChange={(e)=>props.handleActivity && props.handleActivity(props.slNo,e.target.value,false)} value={props.content ?? ""} placeholder="Enter your activity" className="w-full focus:outline-none bg-transparent"/>
            </div>
            <button onClick={(e)=>props.handleActivity && props.content !== "" ? props.handleActivity(props.slNo,!props.status,true) : alert("activity can't be empty")} className={`w-16 h-full bg-gray-200 flex items-center justify-center font-bold text-md hover:bg-gradient-to-tl ${props.status !== true ? `hover:from-red-500 hover:to-black` : `hover:from-green-600 hover:to-green-200`} hover:text-white`}>
                {props.status !== true ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faCheck}/>}
            </button>
        </div>
    )
}
export default Activities