import Link from "next/link";
import React, { useState } from "react";
import { links } from "@/data/links";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Nav() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  const [showBlur, setShowBlur] = useState(false);

  const handleNav = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const screenWidth = window.innerWidth;

      if ((window.scrollY > 0 && screenWidth < 768) || window.scrollY > 200) {
        setShowShadow(true);
        setShowBlur(true);
      } else {
        setShowShadow(false);
        setShowBlur(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`py-5 sticky top-0 w-full  text-black dark:text-white bg-slate-100 dark:bg-black  ${
        showShadow ? "shadow-md" : ""
      } ${
        showBlur ? "" : ""
      } z-50 transition-all duration-300`}
    >
      <div className=" flex justify-between items-center maincol ">
        <div className="font-mono italic text-3xl underline underline-offset-4 cursor-pointer">
          <Link href="/"> Bvcr</Link>
        </div>
        <div className="hidden gap-x-10  md:flex cursor-pointer text-lg ">
          {links.map((link) => (
            <ScrollLink
              className="link"
              activeClass="active"
              to={link.name.toLowerCase()} // use name as id of the section
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {link.name}
            </ScrollLink>
          ))}
    
        </div>

        <div className="md:hidden">
          <button onClick={handleNav}>
            <AiOutlineMenu size={24} />
          </button>
        </div>
        {/* sidebar */}
        {isSidebarOpen && (
          <div className={"fixed left-0 top-0 w-full h-screen bg-black/70   "}>
            <div
              className={
                "fixed top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10"
              }
            >
              <div className="flex w-full items-center justify-between">
                <Link
                  className="text-2xl font-semibold cursor-pointer"
                  href="/"
                >
                  Bvcr
                </Link>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4">
                  Crafting Web Experiences.
                </p>
              </div>
              <div className="py-4 flex flex-col cursor-pointer">
                {links.map((link) => (
                  <ScrollLink
                    className="link"
                    activeClass="active"
                    to={link.name.toLowerCase()} // use name as id of the section
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={handleNav}
                  >
                    <div className="py-4 text-sm uppercase">{link.name}</div>
                  </ScrollLink>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
