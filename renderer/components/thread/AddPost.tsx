import {
  faLock,
  faFileImage,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { TooltipTop } from "../tooltips/TooltipTop";
import { Panel } from "../layouts/Panel";
import { RoundedButton } from "../common/Button";

export const AddPost = () => {
  return (
    <Panel className="my-2 sticky">
      {/* アイコン的なのが入りたい */}
      <div className="bg-slate-500 rounded-full w-10 h-10 shadow"></div>

      {/* テキストエリア */}
      <div className="flex-grow">
        <textarea
          placeholder="ここはあなた専用のメモだよ！思ってること、考えてること、色々書きなぐってみよう！"
          className="outline-none resize-none w-full rounded bg-sky-50 py-1 px-3"
          rows={5}
        />
        <hr className="my-2 border rounded-full border-sky-100 w-full" />
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center">
            <TooltipTop text="この投稿を秘密にするよ！(Premium機能)">
              <RoundedButton onClick={() => {}} className="w-10 h-10">
                <FontAwesomeIcon icon={faLock} />
              </RoundedButton>
            </TooltipTop>
            <TooltipTop text="画像をアップロードするよ！">
              <RoundedButton onClick={() => {}} className="w-10 h-10">
                <FontAwesomeIcon icon={faFileImage} />
              </RoundedButton>
            </TooltipTop>
          </div>
          <RoundedButton
            className="flex items-center space-x-2 h-10"
            onClick={() => {}}
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            <p className="font-bold text-sm">投稿する</p>
          </RoundedButton>
        </div>
      </div>
    </Panel>
  );
};
