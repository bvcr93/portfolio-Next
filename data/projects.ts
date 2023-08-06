import { StaticImageData } from "next/image";
import camping from "../public/camping.jpg";
import clothing from "../public/clothinh.jpg";
import dog2 from "../public/dog2.jpg";
import tuning from "../public/tune.jpg";
export interface Project {
  name: string;
  url: string;
  image: StaticImageData; // Update the type to StaticImageData
  id: number;
  tech: string[];
}

export const projects: Project[] = [
  {
    name: "E-commerce",
    url: "https://e-commerce-livid-pi.vercel.app/",
    image: clothing,
    id: 1,
    tech: ["React", "Styled Components"],
  },
  {
    name: "V18 Rentals",
    url: "https://v18-nu.vercel.app/",
    image: camping,
    id: 2,
    tech: ["NextJS", "Typescript"],
  },
  {
    name: "Car Tuning",
    url: "https://contentful-blog-tuning.vercel.app/",
    image: tuning,
    id: 3,
    tech: ["NextJS", "Typescript", "Contentful", "Framer Motion"],
  },
  {
    name: "Pet Care",
    url: "https://petcare-six.vercel.app/",
    image: dog2,
    id: 3,
    tech: ["NextJS", "Typescript", "PlanetScale", "Prisma", "tRPC"],
  },
];
