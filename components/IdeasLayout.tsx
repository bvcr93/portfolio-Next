// layouts/IdeasLayout.js
import Link from "next/link";
import React, { ReactNode } from "react";

const IdeasLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {children}
      <div className="text-center mt-20">
        <Link href='/'>
          <button className="bg-indigo-500 text-white py-2 px-4 rounded-md">
            Back to home page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default IdeasLayout;
