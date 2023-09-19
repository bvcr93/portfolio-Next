import { Project, projects } from "@/data/projects";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import ProjectItem from "./ProjectItem";
import { useState } from "react";

export default function Projects() {
  return (
    <div id="projects" className={`h-full maincol pb-20  `}>
      <h1 className="text-gray-700 mb-20 text-center">What I've built</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 bg-neutral-100 xl:grid-cols-2 mt-10  rounded-xl shadow-2xl">
        {projects.map((project: Project) => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <section className="basis-1/2 flex border relative  cursor-pointer mt-5 md:mt-0 rounded-xl">
              <ProjectItem {...project} />
            </section>
          </Link>
        ))}
      </div>
      <div className="w-full py-10 mt-10 text-xl text-center">
        My Side projects
      </div>
      <div className="w-full md:flex grid  grid-cols-1 place-items-center mt-10 gap-5 ">
        <Link
          href="https://www.ingbiro.com/"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover-darken-text md:w-1/2 w-full relative rounded-xl h-72 border border-black justify-center flex flex-col items-center cursor-pointer px-10"
        >
          <div className="flex w-full justify-between">
            {" "}
            <h1 className="text-3xl font-bold text-neutral-700">Ingbiro</h1>
            <BsArrowRight
              size={30}
              className="hover:transform duration-300 hover:scale-110"
            />
          </div>
          <div className="flex mt-16 text-gray-600 italic font-light">
            I contributed to the engineering bureau app by developing the
            landing page and implementing the calculator functionality folowing
            best UI/UX principals. I have been working with Styled Components
            and TypeScript
          </div>
        </Link>
      </div>
      <div className="mt-20"></div>
    </div>
  );
}
