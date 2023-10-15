import design from "../../public/designer.png";
import techStack from '../../public/tech-stack.png';
import Image from 'next/image';

export default function Skills(){
    return(
        <>
        <div className="home">
            <div className="space-y-2 pt-5 pb-8 md:space-x-5">
              <h1 className="home-heading md:leading-13">
                Skills
              </h1>
            </div>

            <div className="mb-6">
              <div className="grid grid-cols-2 gap-4 mt-8 items-center">
                  <div className="max-w-sm rounded overflow-hidden shadow-lg dark:shadow-gray-700 shadow-teal-100 h-[580px]">
                  <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover" >
                    <img src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png' className="absolute flex h-32 w-full justify-center rounded-xl bg-cover"/> 
                    <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-teal-400 dark:!border-navy-700">
                    <Image src={design} className="h-14 w-14 rounded-full" alt="design" />
                    </div>
                </div>
                    <div className="px-6 py-4 text-center">
                      <div className="font-bold text-xl mb-2 mt-10 ">Designer</div>
                      <p className="dark:text-white text-black">
                      I value simple content structure, clean design patterns, and thoughtful interactions. <br/>
                      I like to code things from scratch, and enjoy bringing ideas to life in the browser.
                      </p>
                      <p className="dark:text-teal-400 text-teal-400 mt-1">
                        Things I enjoy designing: <br/>
                        <span className="font-medium text-black dark:text-teal-50">Web</span>
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <p className="font-semibold pb-2">Designing Tools: </p>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Figma</span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Illustrator</span>
                    </div>
                  </div>

                  <div className="max-w-sm rounded overflow-hidden shadow-lg dark:shadow-gray-700 shadow-teal-100">
                  <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover" >
                    <Image src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png' className="absolute flex h-32 w-full justify-center rounded-xl bg-cover" alt="image"/> 
                    <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-teal-400 dark:!border-navy-700">
                        <Image src={techStack} className="h-12 w-12 rounded-full" alt="design" />
                    </div>
                </div>
                    <div className="px-6 py-4 text-center">
                      <div className="font-bold text-xl mb-2 mt-10">Frontend Developer</div>
                      <p className="dark:text-teal-400 text-teal-400">
                      Languages I speak:
                      </p>
                      <p className="font-medium text-black dark:text-teal-50">
                      HTML <br/>
                      CSS <br/>
                      JavaScript <br/>
                      Framework: React <br/>
                      TypeScript <br/>
                      Git <br/>
                      Tailwind CSS <br/>
                      Framer Motion <br/>
                      </p>

                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <p className="font-semibold pb-2">Dev Tools: </p>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">VS code</span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">GitHub</span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Firebase</span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Bootstrap</span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Vercel</span>
                    </div>
                  </div>
              </div> 
            </div>
          </div>
        </>
    )
}
   