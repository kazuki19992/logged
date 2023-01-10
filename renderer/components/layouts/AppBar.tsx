import React from "react";
import { Panel } from "./Panel";

export const AppBar = () => {
  return (
    <Panel className="items-center sticky">
      <p className="text-2xl font-bold">あなたのチャンネル</p>
      <p className="text-sm italic text-opacity-50">kazuki19992-MBP.local</p>
    </Panel>
  );
};
