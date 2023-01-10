import React from "react";
import { ButtonProps } from "../../types/components/common/Button";

export const RoundedButton = (props: ButtonProps) => {
  return (
    <button
      className={`rounded-full text-xl px-2 py-1 transition hover:bg-sky-100 text-sky-300 hover:text-sky-400 ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
