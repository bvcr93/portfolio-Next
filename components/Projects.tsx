import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { projects, Project } from "@/data/projects";

export default function Projects() {
  const router = useRouter();

  const handleProjectClick = (id: number) => {
    router.push(`/projects/${id}`);
  };

  return (
    <div id="projects" className="h-screen maincol">
      <header>
        <h1 className="text-gray-700">What I've built</h1>
        <div className="grid md:grid-cols-2 mt-10 gap-10">
          {projects.map((project: Project) => (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <section
                className="basis-1/2 flex border relative cursor-pointer"
                onClick={() => handleProjectClick(project.id)}
              >
                <Image
                  src={project.image}
                  alt=""
                  width={1000}
                  height={1000}
                  className="rounded object-contain"
                />
                <div className="inset-0 absolute opacity-0 hover:opacity-80 bg-black duration-500 flex items-center justify-center text-white text-2xl">
                  {project.name}
                </div>
              </section>
            </Link>
          ))}
        </div>
      </header>
    </div>
  );
}
