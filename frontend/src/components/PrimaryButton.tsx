import React, { MouseEventHandler } from "react";
import "./styles/PrimaryButton.sass";

interface PrimaryButtonProps {
  text: string;
  callback?: MouseEventHandler<HTMLButtonElement>;
}

export default function PrimaryButton({ text, callback }: PrimaryButtonProps) {
  return (
    <button className="primary-button" onClick={callback}>
      {text}
    </button>
  );
}
