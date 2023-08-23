import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IconType } from "react-icons";
interface Link {
  name: string;
  url: string;
}

export const links: Link[] = [
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Projects",
    url: "/projects",
  },

  {
    name: "Contact",
    url: "/contact",
  },
  
];

export interface Icon {
  name: string;
  component: IconType;
  url: string;
}

export const icons: Icon[] = [
  {
    name: "LinkedIn",
    component: FaLinkedinIn,
    url: "",
  },
  {
    name: "GitHub",
    component: FaGithub,
    url: "",
  },
  {
    name: "Mail",
    component: AiOutlineMail,
    url: "/#contact",
  },
  {
    name: "Person",
    component: BsFillPersonLinesFill,
    url: "/#resume",
  },
];
