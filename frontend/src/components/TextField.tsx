import React from "react";
import "./styles/TextField.sass";

interface TextFieldProps {
  placeholder: string;
}

export default function TextField({ placeholder }: TextFieldProps) {
  return <input type="text" className="text-field" placeholder={placeholder} />;
}
