import Image from "next/image";
import React from "react";
import Link from "next/link";
import { projects, Project } from "@/data/projects";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <div id="projects" className="h-screen maincol">
      <header>
        <h1 className="text-gray-700">What I've built</h1>
        <div className="grid md:grid-cols-2 mt-10 gap-10">
          {projects.map((project: Project) => (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <section className="basis-1/2 flex border relative cursor-pointer">
                <ProjectItem {...project} />
              </section>
            </Link>
          ))}
        </div>
      </header>
    </div>
  );
}
