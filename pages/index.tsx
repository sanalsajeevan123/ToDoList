import type { NextPage } from 'next'
import Head from '../components/head'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import Project from '../components/project'

const Home: NextPage = () => {
  const [toDoListData,setToDoListData] = useState([])
  const [projectView,setProjectView] = useState("")
  
  const addNewProject=()=>{
    let tempToDoListData:any = [ ...toDoListData]
    tempToDoListData.push({projectName:"", tasks:[], finishStatus:false})
    setToDoListData(tempToDoListData)
  }

  const handleProjectName=(id:any,name:string)=>{
    let tempToDoListData:any = [...toDoListData]
    tempToDoListData[id].projectName = name
    setToDoListData(tempToDoListData)
  }

  const handleAddActivity=()=>{
    let tempToDoListData:any = [ ...toDoListData]
    tempToDoListData[projectView].tasks.push({activity:"", finishStatus:false})
    setToDoListData(tempToDoListData)
  }

  const handleActivity=(id:any,content:any,isStatus:boolean)=>{
    let tempToDoListData:any = [...toDoListData]
    if(isStatus){
      tempToDoListData[projectView].tasks[id].finishStatus = content
    }else{
      tempToDoListData[projectView].tasks[id].activity = content
    }
    setToDoListData(tempToDoListData)
  }

  return (
    <div className='w-full space-y-5 bg-gradient-to-tl from-cyan-500 via-blue-500 to-indigo-400 min-h-screen'>
      <Head/>
      {projectView === "" ? 
      <div className='w-full flex items-center justify-center'>
        <div className='w-10/12 space-y-2'>
          {toDoListData.map((item:any,key:any)=>{
            return(
              <div className="w-full bg-gray-200 flex items-center justify-between rounded-md" key={key}>
                <input type="text" value={item.projectName ?? ""} onChange={(e)=>handleProjectName(key,e.target.value)} className="text-xl font-semibold px-2 w-full bg-transparent focus:outline-none"/>
                <button onClick={()=>item.projectName !== "" ? setProjectView(key) : alert("Project name can't be empty")} className="bg-gradient-to-tr from-yellow-400 to-orange-400 py-2 w-16 rounded-r-md">
                    <FontAwesomeIcon icon={faAngleUp} className={`rotate-90`}/>
                </button>
            </div>
            )
          })}
          <button onClick={()=>addNewProject()} className="flex items-center justify-center px-3 py-2 rounded-md bg-gradient-to-tl from-red-500 to-black text-white hover:bg-gradient-to-br hover:from-black hover:to-black">
            <h1>New Project</h1>
          </button>
        </div>
      </div>:
      <div className='w-full flex items-center justify-center'>
        <div className='w-10/12 space-y-2'>
          <Project 
            setProjectView={setProjectView}
            projectView={projectView}
            toDoListData={toDoListData}
            handleAddActivity={handleAddActivity}
            handleActivity={handleActivity}
          />
        </div>
      </div>}
    </div>
  )
}

export default Home
