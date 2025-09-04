import { useState } from "react";
import Icon from "../Components/Icon";
import FollowingFeed from "./SubScreen/FollowingFeed";
import ForYouFeed from "./SubScreen/ForYouFeed";

export default function Home() {
  const [feed, setFeed] = useState(1);
  const [newFeed, setNewFeed] = useState(0);

  function changeFeed() {
    if (feed == 1) {
      return <ForYouFeed feed={feed} />;
    } else if (feed == 2) {
      return <FollowingFeed feed={feed} />;
    }
  }

  return (
    <main className="flex flex-col text-white **:duration-200 ease-linear">
      <HomeAppbar />
      <FeedSelecter
        feed={feed}
        setFeed={setFeed}
        newFeed={newFeed}
        setNewFeed={setNewFeed}
      />
      {changeFeed()}
    </main>
  );
}

export function HomeAppbar() {
  return (
    <header className="py-2 px-4 flex justify-between items-center">
      <div className="w-10 h-10 flex justify-center items-center rounded-full bg-primary-700 text-lg">
        S
      </div>
      <Icon icon="x-twitter" type="brands" style="text-3xl" />
      <div className="w-10 h-10 flex justify-center items-center"></div>
    </header>
  );
}

export function FeedSelecter({ feed, setFeed, newFeed, setNewFeed }) {
  function changeToForYou() {
    setFeed(1);
    setNewFeed(newFeed + 1);
  }
  function changeToFollowing() {
    setFeed(2);
    setNewFeed(newFeed - 1);
  }
  return (
    <div className="flex justify-evenly border-b border-b-neutral-700">
      <button
        onClick={changeToForYou}
        className={`p-3 w-fit h-16 ${
          feed == 1
            ? "font-bold border-b-4 border-b-primary-500"
            : "font-semibold text-neutral-500"
        }`}
      >
        For you
      </button>
      <button
        onClick={changeToFollowing}
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
