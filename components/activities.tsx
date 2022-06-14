import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type MyProps = {
    slNo:string,
    content:string
}

const Activities = (props:MyProps) => {
    return(
        <div className="flex items-center justify-between h-10 border">
            <div className="w-16 h-full bg-transparent flex items-center justify-center">
                {props.slNo}
            </div>
            <div className="w-full h-full bg-transparent flex items-center font-semibold">
                {props.content}
            </div>
            <div className={`w-16 h-full bg-gray-200 flex items-center justify-center font-bold text-md hover:bg-gradient-to-tl hover:from-red-500 hover:to-black hover:text-white`}>
                <FontAwesomeIcon icon={faTimes}/>
            </div>
        </div>
    )
}
export default Activities