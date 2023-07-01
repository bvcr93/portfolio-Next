import React from "react";
import Image, { StaticImageData } from "next/image";
interface ProjectItemProps {
  name: string;
  image: StaticImageData;
  id: number;
}
export default function ProjectItem({ name, image }: ProjectItemProps) {
  return (
    <div>
      <Image
        src={image}
        alt=""
        width={1000}
        height={1000}
        className=" object-contain"
      />
      <div className="inset-0 absolute opacity-0 hover:opacity-80 bg-black duration-500 flex items-center justify-center text-white text-2xl">
        {name}
      </div>
    </div>
  );
}