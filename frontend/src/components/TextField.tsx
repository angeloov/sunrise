import React from "react";
import "./styles/TextField.sass";

interface TextFieldProps {
  placeholder: string;
  className?: string;
  type?: string;
}

export default function TextField({ placeholder, type, className }: TextFieldProps) {
  return (
    <input type={type || "text"} className={"text-field " + className} placeholder={placeholder} />
  );
}
