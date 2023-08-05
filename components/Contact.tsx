import React from "react";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

export default function Contact() {
  const { dark } = useContext(ThemeContext);
  const theme = dark ? "bg-neutral-900 text-white" : "bg-slate-100 text-black";
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e: any) => {
    console.log("email was sent");
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <form
      action="https://formsubmit.co/darelbavcar1@gmail.com"
      method="POST"
      onSubmit={onSubmit}
      className={`maincol md:py-16 flex flex-col items-center pb-28 ${theme}`}
      id="contact"
    >
      <div className="w-full flex items-start">
        <h1>Get in touch</h1>
      </div>
      <div className="flex gap-2 flex-col w-full lg:w-2/3 mx-auto mt-10">
        <div className="flex gap-x-4 w-full">
          <Input
            name="email"
            type="email"
            className="p-3 rounded-lg border border-gray-400 w-full outline-none"
            placeholder="Email"
          />
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Type your message here"
            className="w-full p-3 rounded-lg border border-gray-400 outline-none"
            rows={6}
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="px-10 w-full md:w-1/3 py-3 mt-6  duration-200 rounded-full text-gray-700 shadow-md hover:shadow-lg bg-white text-lg"
      >
        Submit
      </button>
    </form>
  );
}
