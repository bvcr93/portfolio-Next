import React from "react";
import Input from "./Input";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <form
      onSubmit={onSubmit}
      className="mt-20 maincol min-h-screen flex flex-col items-center "
      id="contact"
    >
      <div className="w-full flex items-start">
        <h1>get in touch</h1>
      </div>
      <div className="flex gap-2 flex-col w-full lg:w-2/3 mx-auto mt-10">
        <div className="flex gap-x-4 w-full">
          <Input
            type="text"
            className="p-3 rounded-lg border border-gray-400 w-full outline-none"
            placeholder="First Name"
          />
          <Input
            type="text"
            className="p-3 rounded-lg border border-gray-400 w-full outline-none"
            placeholder="Last Name"
          />
        </div>

        <div className="flex gap-x-4 w-full">
          <Input
            type="text"
            className="p-3 rounded-lg border border-gray-400 w-full outline-none"
            placeholder="Email"
          />
          <Input
            type="text"
            className="p-3 rounded-lg border border-gray-400 w-full outline-none"
            placeholder="Phone (optional)"
          />
        </div>
        <div className="w-full">
          <Input
            type="text"
            className="w-full p-3 rounded-lg border border-gray-400 outline-none"
            placeholder="Address (optional)"
          />
        </div>
        <div>
          <textarea
            name=""
            id=""
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
