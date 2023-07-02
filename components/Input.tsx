import React from "react";
interface InputProps {
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
export default function Input({
  type,
  placeholder,
  className,
  onChange,
}: InputProps) {
  return (
    <input
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className={className}
    />
  );
}
