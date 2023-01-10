import React from "react";
import Head from "next/head";
import { AddPost } from "../components/thread/AddPost";
import { Panel } from "../components/layouts/Panel";
import { AppBar } from "../components/layouts/AppBar";
import { Post } from "../components/thread/Post";

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-typescript-tailwindcss)</title>
      </Head>
      <div className="flex-grow flex justify-between space-x-2 mt-2">
        <div className="flex-grow h-full mr-2 flex flex-col">
          {/* ヘッダー */}
          <AppBar />

          {/* 投稿フォーム */}
          <AddPost />

          <div className="flex-grow overflow-y-scroll">
            {/* 投稿 */}
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
        {/* <div className="w-80 h-full flex items-center">
          <div className="w-full max-h-full bg-white rounded-l-xl my-2 py-3 px-5">
            <div className="w-full flex items-center justify-between space-x-2">
              <p className="font-bold text-xl">やることリスト</p>
              <hr className="border-1 flex-grow border-slate-900" />
            </div>
          </div>
        </div> */}
      </div>
    </React.Fragment>
  );
}

export default Home;
