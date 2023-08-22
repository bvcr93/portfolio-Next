import { Icon, icons } from "@/data/links";
import { useEffect, useState } from "react";
import w from "@/public/w.jpg";
import Image from "next/image";
const Main = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      id="home"
      className={`w-full md:h-screen my-20 md:my-0 text-center  text-gray-700 dark:text-white bg-slate-100 dark:bg-black ${
        isLoaded ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
      } transition-all duration-1000 ease-in-out z-0 relative`}
    >
      <div className="maincol relative w-full  h-full mx-auto flex justify-center items-center">
        <div className="w-full relative maincol">
          <h1 className="py-4  md:text-7xl text-5xl">
            Hi, I'm <span className="text-indigo-500">Darel</span>
          </h1>
          <h1 className="py-2  text-4xl md:text-5xl mt-5">
            A Front-End Web Developer
          </h1>
          <p className="py-4  sm:max-w-[70%] m-auto leading-7">
            I specialize in creating high-quality, responsive front-end web
            applications with a focus on user experience and modern design
            principles.
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 ">
            {icons.map((icon: Icon) => (
              <div key={icon.name}>
                <div className="rounded-full shadow-xl   shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <icon.component />
                </div>
              </div>
            ))}
          </div>
          <div className="w-full"></div>
        </div>
      </div>
      <svg
        className="w-full absolute md:bottom-20 md:left-0 hidden md:inline"
        width="100%"
        height="30%"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        overflow="auto"
        shape-rendering="auto"
        fill="#ffffff"
      >
        <defs>
          <path
            id="wavepath"
            d="M 0 2000 0 500 Q 130.5 320 261 500 t 261 0 261 0 261 0 261 0 261 0  v1000 z"
          />
          <path id="motionpath" d="M -522 0 0 0" />
        </defs>
        <g>
          <use xlinkHref="#wavepath" y="139" fill="#3f51b5">
            <animateMotion dur="5s" repeatCount="indefinite">
              <mpath xlinkHref="#motionpath" />
            </animateMotion>
          </use>
        </g>
      </svg>
    </div>
  );
};

export default Main;
