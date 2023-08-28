import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { StaticImageData } from "next/image";

interface ProjectDemoBannerProps {
  name: string;
  imageUrl: string | StaticImageData;
  projectUrl: string;
}

export default function ProjectDemoBanner({
  name,
  imageUrl,
  projectUrl,
}: ProjectDemoBannerProps) {
  return (
    <div className="relative cursor-pointer">
      <Image
        width={1000}
        height={1000}
        src={imageUrl}
        alt={name}
        className="h-[300px] w-full object-cover"
      />
      <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
        <Button
          className="absolute top-[50%] left-[50%]
          transform -translate-x-1/2 -translate-y-1/2 z-50 px-12 py-3 
          rounded  border text-white hover:bg-white 
          duration-200 hover:text-black"
          label="DEMO"
        />
      </Link>
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </div>
  );
}
