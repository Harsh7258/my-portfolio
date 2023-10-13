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

      const data = await client.fetch(query);

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
                                Visit Project <span>
                                    <FramerMagnetic>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                        </svg>
                                    </FramerMagnetic>
                                </span>
                            </a>

                            <a href={project.gitlink}
                            target="_blank"
                            className="card-link group pl-4">
                                Code <span>
                                    <FramerMagnetic>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
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