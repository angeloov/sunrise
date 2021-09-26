import React, { MouseEventHandler } from "react";
import "./styles/PrimaryButton.sass";

interface PrimaryButtonProps {
  text: string;
  className?: string;
  callback?: MouseEventHandler<HTMLButtonElement>;
}

export default function PrimaryButton({ text, callback, className }: PrimaryButtonProps) {
  return (
    <button className={"primary-button " + className} onClick={callback}>
      {text}
    </button>
  );
}
