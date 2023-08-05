import { aboutCards } from "@/data/aboutCards";
import Image from "next/image";
import Link from "next/link";
import "react-vertical-timeline-component/style.min.css";
import tw from "../public/tw.png";
import AboutCard from "./AboutCard";
import VerticalTimelineComp from "./VerticalTimeline";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const About = () => {

  return (
    <div
    id="about"
    className={`w-full maincol flex flex-col items-center md:py-24 `}
  >
      <div className={"md:flex grid-cols-3 gap-8 md:mt-0"}>
        <div className="col-span-2 basis-1/2 ">
          <h1 className={` text-gray-700`}>About</h1>
          <div className="md:ml-48 ml-0">
            <h2 className="py-4">Who I Am</h2>
            <p className="py-2 text-gray-600 md:text-lg leading-7 ">
              I am an adept professional specializing in the construction of
              mobile-responsive front-end UI applications that interface
              seamlessly with APIs and various backend technologies. I thrive on
              exploring and mastering new technologies, understanding the
              variety of paths available to complete a task. While I excel in
              creating front-end applications employing HTML, CSS, JavaScript,
              and React, I am also capable of rapidly learning and adapting to
              new tech stacks as required. I firmly believe that being a
              successful developer involves selecting the most suitable tool for
              the task at hand, not merely sticking to a specific language.
            </p>

            <Link href="/#projects">
              <p className="py-2 text-gray-600 underline underline-offset-4 cursor-pointer italic font-bold">
                Check out some of my latest projects.
              </p>
            </Link>
          </div>
        </div>
        <div
          className="w-full basis-1/2 h-auto m-auto shadow-gray-400 rounded-xl 
        flex items-center justify-center"
        >
          <Image
            src={tw}
            className="rounded-xl mt-16 md:mt-0 md:w-[50%] hidden md:flex"
            alt="/"
            width={200}
          />
        </div>
      </div>
      <div className="w-full mt-24 gap-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
        {aboutCards.map((card) => (
          <AboutCard {...card} key={card.title} />
        ))}
      </div>
      
      <VerticalTimelineComp />
     
    </div>
  );
};

export default About;
