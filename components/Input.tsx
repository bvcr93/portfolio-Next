import React from "react";
interface InputProps {
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
}
export default function Input({
  type,
  placeholder,
  className,
  onChange,
  name
}: InputProps) {
  return (
    <input
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className={className}
      name={name}
    />
  );
}
