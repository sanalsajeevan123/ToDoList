import type { NextPage } from 'next'
import Projects from '../components/projects'
import Head from '../components/head'

const Home: NextPage = () => {
  return (
    <div className='w-full space-y-5 bg-gradient-to-tl from-cyan-500 via-blue-500 to-indigo-400 min-h-screen'>
      <Head/>
      <div className='w-full flex items-center justify-center'>
        <div className='w-10/12 space-y-2'>
          {[...Array(1)].map((item:any,key:any)=>{
            return(
              <Projects key={key}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
