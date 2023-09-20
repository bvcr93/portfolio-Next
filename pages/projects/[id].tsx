import { useRouter } from "next/router";
import { projects, Project } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import Button from "@/components/Button";
import ProjectDemoBanner from "@/components/ProjectDemoBanner";
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
    <div className="relative h-full maincol min-h-screen mt-20">
      <h1 className="mb-10">{project.name}</h1>

      <ProjectDemoBanner
        name={project.name}
        imageUrl={project.image.src}
        projectUrl={project.url}
      />
    </div>
  );
}
