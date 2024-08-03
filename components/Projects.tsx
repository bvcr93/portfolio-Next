import { Project, projects } from "@/data/projects";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <div id="projects" className={`h-full maincol pb-20  `}>
      <h1 className="text-gray-700 mb-20 text-center">What I've built</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 mt-10">
        {projects.map((project: Project) => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <section className="basis-1/2 flex border relative  cursor-pointer mt-5 md:mt-0 rounded-xl">
              <ProjectItem {...project} />
            </section>
          </Link>
        ))}
      </div>
      <div className="w-full py-10 mt-10 text-xl text-center">
        Collaborative Projects
      </div>
      <div className="md:flex gap-10 grid grid-cols-1">
        <Link
          href={"https://ling.hr/"}
          className="w-full md:flex grid grid-cols-1 place-items-center mt-10 gap-5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="hover-darken-text w-full h-full md:py-8 py-4 relative rounded-xl border border-black justify-center flex flex-col items-center px-10">
            <div className="flex w-full justify-between">
              <h1 className="text-3xl font-bold text-neutral-700">
                Legal Engineering Project
              </h1>
              <BsArrowRight
                size={30}
                className="hover:transform duration-300 hover:scale-110"
              />
            </div>
            <div className="flex mt-16 text-gray-600 italic font-light">
              I contributed to the engineering bureau app by developing the
              landing page and implementing the calculator functionality
              following best UI/UX principles. I have been working with Styled
              Components and TypeScript.
            </div>
          </div>
        </Link>
        <Link
          href={"https://www.petsandsitters.com/"}
          className="w-full md:flex grid grid-cols-1 place-items-center mt-10 gap-5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="hover-darken-text w-full h-full md:py-8 py-4 relative rounded-xl border border-black justify-center flex flex-col items-center px-10">
            <div className="flex w-full justify-between">
              <h1 className="text-3xl font-bold text-neutral-700">
                Pets&Sitters
              </h1>
              <BsArrowRight
                size={30}
                className="hover:transform duration-300 hover:scale-110"
              />
            </div>
            <div className="flex mt-16 text-gray-600 italic font-light">
              I contributed to the Pets & Sitters project by designing the user
              interface and implementing basic CRUD operations. I utilized
              Next.js and TypeScript for the development, integrated tRPC for
              type-safe API communication, and applied Tailwind CSS for styling.
              Additionally, I incorporated Google APIs to enhance functionality
              and user experience.
            </div>
          </div>
        </Link>
      </div>

      <div className="mt-20"></div>
    </div>
  );
}
