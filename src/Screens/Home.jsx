import { useState } from "react";
import Icon from "../Components/Icon";
import FollowingFeed from "./SubScreen/FollowingFeed";
import ForYouFeed from "./SubScreen/ForYouFeed";
import Sidebar from "../Components/Sidebar";
import SidebarBtn from "../Components/SidebarBtn";

export default function Home({ isOpen, onClick }) {
  const [feed, setFeed] = useState(1);

  return (
    <main className="flex flex-col text-white **:duration-200 ease-linear mb-16">
      <HomeAppbar onClick={onClick} isOpen={isOpen} />
      <Sidebar isOpen={isOpen} onClick={onClick} />
      <FeedSelecter feed={feed} setFeed={setFeed} />
      {feed === 1 && <ForYouFeed feed={feed} />}
      {feed === 2 && <FollowingFeed feed={feed} />}
    </main>
  );
}

export function HomeAppbar({ onClick }) {
  return (
    <header
      className={`z-40 py-2 px-4 flex justify-between items-center bg-black/10 backdrop-blur-xs`}
    >
      <SidebarBtn onClick={onClick} />
      <Icon icon="x-twitter" type="brands" style="text-3xl" />
      <div className="w-10 h-10 flex justify-center items-center"></div>
    </header>
  );
}

export function FeedSelecter({ feed, setFeed }) {
  return (
    <div className="flex justify-evenly border-b border-b-neutral-700">
      <button
        onClick={() => setFeed(1)}
        className={`p-3 w-fit h-16 ${
          feed == 1
            ? "font-bold border-b-4 border-b-primary-500"
            : "font-semibold text-neutral-500"
        }`}
      >
        For you
      </button>
      <button
        onClick={() => setFeed(2)}
        className={`p-3 w-fit h-16 ${
          feed == 2
            ? "font-bold border-b-4 border-b-primary-500"
            : "font-semibold text-neutral-500"
        }`}
      >
        Following
      </button>
    </div>
  );
}
