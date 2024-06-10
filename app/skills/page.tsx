"use client"

import { useState, useEffect } from "react";
import SkillLoop from "./skillLoop.jsx";
import Skeleton from "./skeleton.jsx"

export default function Skills(){
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  },[])
    return(
        <>
        <div className="home">
            <div className="space-y-2 pt-5 pb-8 md:space-x-5">
              <h1 className="home-heading md:leading-13">
                Skills
              </h1>
            </div>
            {loading ? <Skeleton/> : <SkillLoop/>}
          </div>
        </>
    )
}
   