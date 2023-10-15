import FramerMagnetic from "../components/FramerMotion";
import { client } from "../lib/sanity";
import Image from "next/image";

interface Data {
    title: string;
    overview: string;
    link: string;
    _id: string;
    gitlink: string;
    imageURL: string;
}

async function getProjects() {
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

      return data;
}

export default async function Projects() {
    const data: Data[] = await getProjects();

    // console.log(data);
    // log data in terminal
    

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
                            className="w-full h-full object-cover"/>
                        </div>

                        <div className="p-4 sm:p-6">
                            <a href={project.link} target="_blank">
                                <h3 className="card-title">
                                    {project.title}
                                </h3>
                            </a>

                            <p className="card-overview">
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