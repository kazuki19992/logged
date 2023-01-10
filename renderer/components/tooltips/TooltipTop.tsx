import React from "react";
import { TooltipProps } from "../../types/components/tooltips/Common";

export const TooltipTop = (props: TooltipProps) => {
  return (
    <span className="relative  group">
      <span
        className={[
          "whitespace-nowrap",
          "rounded",
          "bg-slate-900",
          "px-2",
          "py-1",
          "text-slate-100",
          "absolute",
          "-top-12",
          "left-1/2",
          "-translate-x-1/2",
          "before:content-['']",
          "before:absolute",
          "before:-translate-x-1/2",
          "before:left-1/2",
          "before:top-full",
          "before:border-4",
          "before:border-transparent",
          "before:border-t-slate-900",
          "opacity-0",
          "group-hover:opacity-100",
          "transition",
          "pointer-events-none",
        ].join(" ")}
      >
        {props.text}
      </span>
      {props.children}
    </span>
  );
};
