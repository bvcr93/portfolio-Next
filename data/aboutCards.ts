import { IconType } from "react-icons";
import { DiJavascript1 } from "react-icons/di";
import { GiMaterialsScience } from "react-icons/gi";
import { MdOutlinePsychology } from "react-icons/md";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPrisma,
} from "react-icons/si";

interface AboutCard {
  Icon: IconType;
  title: string;
  description: string;
  color: string;
}

export const aboutCards: AboutCard[] = [
  {
    Icon: GiMaterialsScience,
    title: "React",
    description:
      "I have experience with React, a JavaScript library for building user interfaces.",
    color: "#61DAFB",
  },
  {
    Icon: DiJavascript1,
    title: "JavaScript",
    description:
      "Experience with JavaScript, the programming language of the web.",
    color: "#F7DF1E",
  },
  {
    Icon: SiTypescript,
    title: "TypeScript",
    description:
      "I love to use TypeScript, a superset of JavaScript, to write more reliable code.",
    color: "#3178C6",
  },
  {
    Icon: SiNextdotjs,
    title: "Next.js",
    description:
      "I have worked with Next.js, a powerful React framework, for server-rendered applications.",
    color: "#000000",
  },
  {
    Icon: SiTailwindcss,
    title: "Tailwind CSS",
    description:
      "I have experience with the utility-first CSS framework Tailwind CSS, enabling rapid UI development.",
    color: "#38B2AC",
  },
  {
    Icon: SiPrisma,
    title: "Prisma",
    description:
      "I have experience with Prisma, a database toolkit, for database management.",
    color: "#34D399",
  },
];
