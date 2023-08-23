import { useRouter } from "next/router";
import { projects, Project } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";
export default function ProjectDetails() {
  const [selectedColor, setSelectedColor] = useState("blue-500");
  const [isColorActive, setIsColorActive] = useState(false);
  console.log(isColorActive);
  const router = useRouter();
  const { id } = router.query;

  const project: Project | undefined = projects.find(
    (project) => project.id === parseInt(id as string)
  );

  if (!project) {
    return <div>Loading...</div>;
  }

  const colorClass = `w-1 h-full absolute left-0 bg-${selectedColor}`;
  const hoverColorClass = isColorActive ? "bg-blue-500" : "";

  return (
    <div className="relative h-full maincol min-h-screen">
      <h1>Project Details - {project.name}</h1>
      <Link href={project.url}>
        <div className="relative cursor-pointer">
          <Image
            width={1000}
            height={1000}
            src={project.image.src}
            alt={project.name}
            className="h-[300px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
      </Link>
      <section className="mt-10">
        <h1>Technologies I Use:</h1>
        <p>{project.tech}</p>
      </section>
      <div className="w-full flex flex-col">
        <div
          className={`flex justify-between gap-x-10 border w-2/3  rounded relative  hover:shadow-md duration-300 cursor-pointer`}
          onMouseEnter={() => setIsColorActive(true)}
          onMouseLeave={() => setIsColorActive(false)}
        >
          <div className={colorClass}></div>
          <div className="basis-2/3 text-3xl font-mono italic py-3 px-3 text-center">
            Making of the project
          </div>
          <div
            className={`basis-1/3 flex items-center justify-end px-3 ${hoverColorClass}`}
          >
            <BsChevronRight size={20} />
          </div>
        </div>
        <div className="flex"></div>
        <div className="flex"></div>
        <div className="flex"></div>
      </div>
    </div>
  );
}
