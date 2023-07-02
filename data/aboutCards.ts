import { IconType } from "react-icons";
import { GiMaterialsScience } from "react-icons/gi";
import { DiJavascript1 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { MdOutlinePsychology } from "react-icons/md";

interface AboutCard {
  Icon: IconType;
  title: string;
  description: string;
}

export const aboutCards: AboutCard[] = [
  {
    Icon: GiMaterialsScience,
    title: "Material Science",
    description:
      "I have a background in Material Science and Engineering. ",
  },
  {
    Icon: DiJavascript1,
    title: "JavaScript",
    description: "I have experience with JavaScript, TypeScript, and React.",
  },
  {
    Icon: AiFillHtml5,
    title: "HTML5",
    description:
      "I am proficient in HTML5, structuring responsive and accessible web pages.",
  },
  {
    Icon: SiNextdotjs,
    title: "Next.js",
    description:
      "I have worked with Next.js, a powerful React framework, for server-rendered applications.",
  },
  {
    Icon: SiTailwindcss,
    title: "Tailwind CSS",
    description:
      "I have experience with the utility-first CSS framework Tailwind CSS, enabling rapid UI development.",
  },
  {
    Icon: MdOutlinePsychology,
    title: "Psychology",
    description:
      "I have interest and knowledge in basic principles of psychology that are relevant to UI/UX design.",
  },
];
