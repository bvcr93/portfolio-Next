import { useRouter } from "next/router";
import { projects, Project } from "@/data/projects";

export default function ProjectDetails() {
  const router = useRouter();
  const { id } = router.query;

  const project: Project | undefined = projects.find(
    (project) => project.id === parseInt(id as string)
  );

  return (
    <div className="relative h-full maincol">
      <h1>Project Details - {project?.name}</h1>
      <img
        src={project?.image.src}
        alt={project?.name}
        className="h-[300px] w-full object-cover"
      />

    </div>
  );
}
