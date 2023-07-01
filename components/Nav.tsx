import Link from "next/link";
import React, { useState } from "react";
import { links } from "@/data/links";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Nav() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleNav = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="py-5 sticky top-0 w-full shadow-xl">
      <div className="maincol flex justify-between items-center ">
        <div className="font-mono italic text-3xl underline underline-offset-4 cursor-pointer">
          <Link href="/"> Bvcr</Link>
        </div>
        <div className="gap-10 hidden md:flex">
          {links.map((link) => (
            <Link className="link" href={link.url}>
              {link.name}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={handleNav}>
            <AiOutlineMenu size={24} />
          </button>
        </div>
        {isSidebarOpen && (
          <div
            className={
              isSidebarOpen
                ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
                : ""
            }
          >
            <div
              className={
                isSidebarOpen
                  ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                  : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
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
              <div className="py-4 flex flex-col">
                {links.map((link) => (
                  <Link className="link" href={link.url}>
                    <div onClick={handleNav} className="py-4 text-sm uppercase">
                      {link.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
