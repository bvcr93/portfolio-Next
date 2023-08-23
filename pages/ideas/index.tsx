import React, { ReactElement } from "react";
import Link from "next/link";
import IdeasLayout from "@/components/IdeasLayout";
import Image from "next/image";
import dog from "../../public/dog with owner 0.png";
import { BsArrowRightCircle } from "react-icons/bs";
export default function IdeasPage() {
  return (
    <div className="maincol">
      <button className="mt-20">
        <Link href="/ideas/primary">
          <BsArrowRightCircle size={30} />
          go to primary ideas
        </Link>
      </button>
      <div className="w-full mt-20 md:flex gap-10">
        <div className="basis-1/3 h-[930px] rounded-2xl bg-white">
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
        </div>
        <div className="basis-2/3 bg-white rounded-2xl flex flex-col gap-5">
          <div className="w-full border h-[100px] rounded-2xl">navbar</div>
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
