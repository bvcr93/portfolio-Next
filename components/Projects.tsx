import Image from "next/image";
import React from "react";
import tuning from "../public/tuning.png";
import ecommerce from "../public/ecommerce.png";
import v18 from "../public/v18.png";
export default function Projects() {
  return (
    <div id="projects" className="h-screen maincol">
      <header>
        <h1 className="text-gray-700">What I've built</h1>
        <div className="flex mt-10 gap-10 ">
          <section className="basis-1/2 border relative ">
            <Image
              src={ecommerce}
              width={1000}
              height={1000}
              alt=""
              className="rounded"
            />
            <div className="absolute inset-0 hover:bg-black opacity-60 rounded duration-500 flex items-center justify-center text-white">
              E-Commerce
            </div>
          </section>

          <section className="basis-1/2 border relative">
            <Image
              src={v18}
              height={1000}
              alt=""
              className="rounded object-contain"
            />
            <div className="absolute inset-0 hover:bg-black opacity-60 rounded duration-500 flex items-center justify-center text-white">
              V18 Rentals
            </div>
          </section>
        </div>
      </header>
    </div>
  );
}
