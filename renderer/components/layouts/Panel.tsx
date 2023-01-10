import React from "react";
import { PanelProps } from "../../types/components/layouts/Common";

export const Panel = (props: PanelProps) => {
  return (
    <div
      className={`w-full rounded bg-white py-3 px-6 shadow flex justify-between items-start space-x-4 ${props.className}`}
    >
      {props.children}
    </div>
  );
};
