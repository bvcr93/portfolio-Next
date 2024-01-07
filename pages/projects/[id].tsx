import Button from "@/components/Button";
import ProjectDemoBanner from "@/components/ProjectDemoBanner";
import { Project, projects } from "@/data/projects";
import Link from "next/link";
import { useRouter } from "next/router";
export default function ProjectDetails() {

  const router = useRouter();
  const { id } = router.query;

  const project: Project | undefined = projects.find(
    (project) => project.id === parseInt(id as string)
  );

  if (!project) {
    return <div>Loading...</div>;
  }
  const { tech, name, url, image } = project;
  return (
    <div className="relative h-full maincol min-h-screen mt-20">
      <h1 className="mb-10">{project.name}</h1>
      <ProjectDemoBanner
        name={name}
        imageUrl={image.src}
        projectUrl={url}
        tech={tech}
      />
      <Link href="/#projects">
        <Button
          label="Back to Projects"
          className="px-2 mt-10 py-2 bg-transparent rounded border border-slate-600 hover:bg-black hover:text-white duration-200"
        />
      </Link>
    </div>
  );
}
