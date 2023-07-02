import { Icon, icons } from "@/data/links";
import { useEffect, useState } from "react";


const Main = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      id="home"
      className={`w-full md:h-screen my-20 md:my-0 text-center maincol ${
        isLoaded ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
      } transition-all duration-1000 ease-in-out z-0 relative`}
    >
      <div className="max-w-[1240px] w-full h-full mx-auto  flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700 md:text-7xl text-5xl">
            Hi, I'm <span className="text-[#5651e5]">Darel</span>
          </h1>
          <h1 className="py-2 text-gray-700 text-4xl md:text-5xl mt-5">
            A Front-End Web Developer
          </h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto leading-7">
            I specialize in creating high-quality, responsive front-end web
            applications with a focus on user experience and modern design
            principles.
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            {icons.map((icon: Icon) => (
              <div key={icon.name}>
                <div className="rounded-full shadow-xl  shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <icon.component />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
