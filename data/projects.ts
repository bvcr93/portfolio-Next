import { StaticImageData } from "next/image";
import ai3 from "../public/ai3.jpg";
import bug from "../public/bug.jpg";
import dog2 from "../public/dog2.jpg";
import hotel2 from "../public/hotel2.jpg";
import meal from "../public/meal.jpg";
export interface Project {
  name: string;
  url: string;
  image: StaticImageData;
  id: number;
  tech: string[];
}

export const projects: Project[] = [
  // {
  //   name: "PetCare",
  //   url: "https://www.petsandsitters.com/",
  //   image: dog2,
  //   id: 1,
  //   tech: [
  //     "Next JS",
  //     "TypeScript",
  //     "tRPC",
  //     "Prisma",
  //     "PostgreSQL",
  //     "Tailwind CSS",
  //     "NextAuth",
  //   ],
  // },
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
    url: "https://meal-planner-murex.vercel.app/",
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
  {
    name: "Issue Tracker",
    url: "https://issue-tracker-rust.vercel.app/",
    image: bug,
    id: 8,
    tech: [
      "NextJS",
      "Typescript",
      "Tailwind CSS",
      "ShadcnUI",
      "Prisma",
      "MongoDB",
    ],
  },
];
