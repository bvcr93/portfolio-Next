import React from "react";
interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}
export default function Button({ label, onClick,className }: ButtonProps) {
  return (
    <button
      className= {className}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
