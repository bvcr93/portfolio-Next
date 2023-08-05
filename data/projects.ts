import { StaticImageData } from "next/image";
import car from "../public/car.png";
import ecommerce from "../public/ecommerce.png";
import v18 from "../public/v18.png";
import dog2 from "../public/dog2.jpg";
export interface Project {
  name: string;
  url: string;
  image: StaticImageData; // Update the type to StaticImageData
  id: number;
}

export const projects: Project[] = [
  {
    name: "E-commerce",
    url: "https://e-commerce-livid-pi.vercel.app/",
    image: ecommerce,
    id: 1,
  },
  {
    name: "V18 Rentals",
    url: "https://v18-nu.vercel.app/",
    image: v18,
    id: 2,
  },
  {
    name: "Car Tuning",
    url: "https://v18-nu.vercel.app/",
    image: car,
    id: 3,
  },
  {
    name: "Pet Care",
    url: "https://petcare-six.vercel.app/",
    image: dog2,
    id: 3,
  },
];
