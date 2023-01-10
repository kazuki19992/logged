import React from "react";
import { Panel } from "../layouts/Panel";

export const Post = () => {
  return (
    <Panel className="mb-2">
      {/* アイコン的なのが入りたい */}
      <div className="bg-slate-500 rounded-full w-10 h-10 shadow"></div>
      <div className="flex-grow">
        <div className="flex justify-between items-center space-x-2">
          <p className="font-bold text-xl">カズ之助</p>
        </div>
        <hr className="my-2 border rounded-full border-sky-100 w-full" />
        <p className="">
          ここに投稿が入りますあああああああああああああああ
          <br />
          あああああああああああ
        </p>
        <hr className="my-2 border rounded-full border-sky-100 w-full" />
      </div>
    </Panel>
  );
};
