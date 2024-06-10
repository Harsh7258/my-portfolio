import React from 'react'
import Image from 'next/image';
import skillData from "./skillsData.json"

const SkillLoop = () => { 
  return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 s:grid-cols-2 xs:grid-cols-1 gap-6 mb-3'>
          {skillData.map((skill) => (
           <div className='flex flex-row items-center gap-4 p-4 project-card mt-3 shadow-lg hover:shadow-md hover:shadow-teal-400 dark:hover:shadow-gray-600 dark:hover:shadow-md cursor-pointer' key={skill.id}>
             <div>
               <Image src={skill.image} alt={skill.skill} width={48} height={48} className=' w-auto h-auto rounded-xl'/>
             </div>
             <div className='flex flex-col'>
               <h5 className='card-title text-pretty'>{skill.skill}</h5>
               <span className='card-overview text-xs'>{skill.desc}</span>
             </div>
           </div>
     ))}
    </div>
  )
}

export default SkillLoop
