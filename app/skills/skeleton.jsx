import React from 'react'
import skillData from "./skillsData.json"

const Skeleton = () => { 
  return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 s:grid-cols-2 xs:grid-cols-1 gap-6 mb-3'>
          {skillData.map((skill) => (
           
           <div className='flex flex-row items-center gap-4 p-4 project-card mt-3 shadow-lg hover:shadow-md hover:shadow-teal-400 dark:hover:shadow-gray-600 dark:hover:shadow-md cursor-pointer bg-gray-300 animate-pulse' key={skill.id}>
             <div>
                <svg
                    className="w-12 h-12 text-gray-300 dark:text-gray-400 rounded-xl"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                    >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
             </div>
             <div className='flex flex-col h-2 w-[50%] bg-gray-300 rounded-full mb-4'/>
           </div>
         
            
     ))}
    </div>
  )
}

export default Skeleton
