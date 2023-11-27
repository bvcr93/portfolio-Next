import { StaticImageData } from "next/image";
import camping from "../public/camping.jpg";
import clothing from "../public/clothinh.jpg";
import ai3 from "../public/ai3.jpg";
import meal from "../public/meal.jpg";
import hotel2 from "../public/hotel2.jpg";
import dog2 from "../public/dog2.jpg";
import tuning from "../public/tune.jpg";
export interface Project {
  name: string;
  url: string;
  image: StaticImageData;
  id: number;
  tech: string[];
}

export const projects: Project[] = [
  {
    name: "PetCare",
    url: "https://petcare-six.vercel.app/",
    image: dog2,
    id: 1,
    tech: [
      "Next JS",
      "TypeScript",
      "tRPC",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "NextAuth",
    ],
  },
  {
    name: "V18 Rentals",
    url: "https://v18-nu.vercel.app/",
    image: camping,
    id: 2,
    tech: ["NextJS", "Typescript"],
  },
  {
    name: "Ai Chatbot",
    url: "https://saas-ai-chat.vercel.app/",
    image: ai3,
    id: 4,
    tech: ["NextJS", "Typescript", "OpenAi API"],
  },
  {
    name: "Hotel Booking",
    url: "https://bevanda-dq2fhpoxp-nine-agency.vercel.app/",
    image: hotel2,
    id: 5,
    tech: ["NextJS", "Typescript"],
  },
  {
    name: "Meal Planner",
    url: "https://meal-planner-nu.vercel.app/",
    image: meal,
    id: 6,
    tech: [
      "NextJS",
      "Typescript",
      "Tailwind CSS",
      "Edgestore",
      "Prisma",
      "MySQL",
    ],
  },
];
