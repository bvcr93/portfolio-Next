import Image from "next/image";
import React from "react";
import Link from "next/link";
import { projects, Project } from "@/data/projects";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <div id="projects" className="h-full maincol py-28 ">
      <h1 className="text-gray-700">What I've built</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 mt-10 gap-10 p-10 rounded-xl shadow-2xl">
        {projects.map((project: Project) => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <section className="basis-1/2 flex border relative  cursor-pointer mt-5 md:mt-0 rounded-xl">
              <ProjectItem {...project} />
            </section>
          </Link>
        ))}
      </div>
    </div>
  );
}
