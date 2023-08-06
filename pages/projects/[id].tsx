import { useRouter } from "next/router";
import { projects, Project } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
export default function ProjectDetails() {
  const router = useRouter();
  const { id } = router.query;

  const project: Project | undefined = projects.find(
    (project) => project.id === parseInt(id as string)
  );

  if (!project) {
    return <div>Loading...</div>;
  }

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
    </div>
  );
}
