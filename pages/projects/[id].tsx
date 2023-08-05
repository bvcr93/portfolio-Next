import { useRouter } from "next/router";
import { projects, Project } from "@/data/projects";

export default function ProjectDetails() {
  const router = useRouter();
  const { id } = router.query;

  const project: Project | undefined = projects.find(
    (project) => project.id === parseInt(id as string)
  );

  return (
    <div className="relative h-full maincol min-h-screen">
      <h1>Project Details - {project?.name}</h1>
      <div className="relative">
        <img
          src={project?.image.src}
          alt={project?.name}
          className="h-[300px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <section className="mt-10">
        <h1>Technologies I Use:</h1>
        <p></p>
      </section>
    </div>
  );
}
