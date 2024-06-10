"use client"

import { useState, useEffect } from "react";
import FramerMagnetic from "../components/FramerMotion";
import { client } from "../lib/sanity";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";

interface Data {
    title: string;
    overview: string;
    link: string;
    _id: string;
    gitlink: string;
    imageURL: string;
}

async function getProjects(): Promise<Data[] | null> {
    try {
        
        const query = `*[_type == "project"] {
            link,
              title,
              overview,
              _id,
              gitlink,
              "imageURL": image.asset->url
          }`;
          // query of sanity project
    
          const data = await client.fetch(query);
          // fetching data thorugh query
        //   console.log(data)
    
          return data;
    } catch (error) {
        console.error("Error fetching projects:", error);
        return null;
    } 
}

export default function Projects() { //async function 
    // const data: Data[] = await getProjects();
    const [data, setData] = useState<Data[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const projects = await getProjects();
            setData(projects);
            setLoading(false);
        };

        fetchData();
    }, []);

    const toastAlert = () => toast.success("Redirected to Project Link!")
    // console.log(data) 
    //log data 

    const SkeletonLoader = () => {
        return (
            <div className="projects-container">
                <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                    <h1 className="project-heading sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                    All Projects
                    </h1>
                </div>
                <div className="project-wrapper">
                    {Array.from({ length: 6 }).map((val, index) => (
                        <article key={index} className="project-card animate-pulse">
                            <div className="h-56 w-full bg-gray-300 flex items-center" key={index}>
                            <svg
                                className="w-full h-14 text-gray-400 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 18"
                                >
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                            </div>
                            <div className="p-4 sm:p-6">
                                <div className="h-6 bg-gray-300 mb-2 rounded-full"></div>
                                <div className="h-4 bg-gray-300 mb-4 rounded-full"></div>
                                <div className="h-4 bg-gray-300 mb-2 w-1/2 rounded-full"></div>
                                <div className="flex space-x-4">
                                    <div className="h-6 w-6 bg-gray-300 rounded-md"></div>
                                    <div className="h-6 w-6 bg-gray-300 rounded-md"></div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        );
    };

    if(loading){
        return <SkeletonLoader/>
    }
    if (!data) {
        return <div>No projects available.</div>;
    }

    return (
        <>
        <div className="projects-container">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                <h1 className="project-heading sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                All Projects
                </h1>
            </div>

            <div className="project-wrapper">
                {data.map((project) => (
                    <article 
                    key={project._id}
                    className="project-card">
                        <div className="h-56 w-full relative">
                            <Image fill src={project.imageURL}
                            alt="Image of the project"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="w-full h-full object-cover"/>
                        </div>

                        <div className="p-4 sm:p-6">
                            <a href={project.link} target="_blank">
                                <h3 className="card-title">
                                    {project.title}
                                </h3>
                            </a>

                            <p className="card-overview text-sm">
                                {project.overview}
                            </p>

                            <a href={project.link}
                            target="_blank"
                            className="card-link group">
                                <FramerMagnetic>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                 </FramerMagnetic>
                            </a>

                            <a href={project.gitlink}
                            target="_blank"
                            className="card-link group pl-4"> <span>
                                    <FramerMagnetic>
                                        <svg
                                            viewBox="0 0 1024 1024"
                                            fill="currentColor"
                                            className="w-6 h-6 ">
                                                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                                        </svg>
                                    </FramerMagnetic>
                                </span>
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </div>
        </>
    )
}