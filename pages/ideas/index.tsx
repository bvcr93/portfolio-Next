import React, { ReactElement } from "react";
import Link from "next/link";
import IdeasLayout from "@/components/IdeasLayout";
import Image from "next/image";
import dog from "../../public/dog with owner 0.png";
import { BsArrowRightCircle } from "react-icons/bs";
import { FaHome, FaProjectDiagram, FaTasks, FaTeamspeak } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";
import { IconType } from "react-icons";
export default function IdeasPage() {
  interface Link {
    name: string;
    icon: IconType;
  }
  const links: Link[] = [
    {
      name: "Home",
      icon: FaHome,
    },
    {
      name: "Projects",
      icon: FaProjectDiagram,
    },
    {
      name: "Tasks",
      icon: FaTasks,
    },
    {
      name: "Team",
      icon: FaTeamspeak,
    },
    {
      name: "Settings",
      icon: GiSettingsKnobs,
    },
  ];
  return (
    <div className="maincol text-neutral-600">
      <button className="mt-20">
        <Link href="/ideas/primary">
          <BsArrowRightCircle size={30} />
          go to primary ideas
        </Link>
      </button>
      <div className="w-full mt-20 md:flex gap-10">
        <div className="basis-1/3 h-[930px] rounded-2xl bg-slate-50">
          <header className="w-full p-4 flex items-center gap-10">
            <div className="rounded-full w-14 h-14 border ">
              <Image
                className="rounded-full object-cover"
                src={dog}
                width={100}
                alt=""
              />
            </div>

            <p className="font-light text-neutral-700 text-xl ">
              Admin Dashboard Profile
            </p>
          </header>

          <div className="flex flex-col space-y-5 mt-10  text-lg">
            {links.map((link) => (
              <div key={link.name} className="flex items-center gap-5 px-5 ">
                <link.icon />
                <p>{link.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 w-full px-5">
            <div
              className="w-full h-72 shadow-md rounded-2xl text-center px-10 flex flex-col justify-between items-center"
              style={{
                background: "linear-gradient(to bottom, #ffffff, #f3f3f3)",
              }}
            >
              {" "}
              <header className="font-bold text-2xl text-center py-5">
                Upgrade to pro
              </header>
              <p className="text-neutral-500">
                Get 1 month free and then $1 each month after
              </p>
              <button className="w-24 py-2 bg-blue-400 mb-10 rounded-full text-white">
                Go Pro
              </button>
            </div>
          </div>
        </div>
        <div className="basis-2/3 bg-white rounded-2xl flex flex-col gap-5">
          <div className="w-full border h-[100px] rounded-2xl hidden md:flex">
            navbar
          </div>
          <div className="w-full h-[810px] border flex gap-5 rounded-2xl">
            <div className="basis-1/2 border rounded-2xl">left</div>
            <div className="basis-1/2 border flex flex-col rounded-2xl">
              <div className="basis-1/2 border rounded-2xl">right upper</div>
              <div className="basis-1/2 border rounded-2xl">right below</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
IdeasPage.getLayout = function getLayout(page: ReactElement) {
  return <IdeasLayout>{page}</IdeasLayout>;
};
