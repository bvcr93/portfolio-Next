import React from "react";

export default function Contact() {
  const theme = "bg-transparent text-black";
  const handleClick = () => {
    window.location.href = "mailto:darelbavcar1@gmail.com?subject=Get in Touch";
  };

  return (
    <div
      className={`maincol flex flex-col items-center pb-28 pt-20 ${theme}`}
      id="contact"
    >
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-bold text-neutral-700 mb-4">
          We'd Love to Hear From You
        </h1>
        <p className="text-neutral-600 text-lg md:text-xl mb-8 text-center px-4">
          Have any questions or feedback? Click the button below to get in touch
          with me.
        </p>
      </div>
      
      <button
        onClick={handleClick}
        className="px-10 py-3 mt-6 md:w-1/2 w-full duration-200 text-gray-700 shadow-md hover:shadow-lg bg-white text-lg rounded-full"
      >
        Get in Touch
      </button>
    </div>
  );
}
