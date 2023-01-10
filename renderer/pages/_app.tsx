import React from "react";
import type { AppProps } from "next/app";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen w-screen bg-sky-100 text-slate-900">
      <div className="w-full h-full flex md:sm:xs:block justify-between space-x-2">
        {/* メニューバーとか */}
        <div className="bg-white shadow rounded-r h-1/2 w-80 my-2 py-3 px-5">
          <div className="w-full flex items-center justify-between space-x-2">
            <p className="font-bold text-xl">チャンネル選択</p>
            <hr className="border-1 flex-grow border-slate-900" />
          </div>
          <p className="text-center text-xs my-5">
            他の人のチャンネルを追加しよう！
          </p>
        </div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
