import { useState } from "react";
import Icon from "../Components/Icon";
import Sidebar from "../Components/Sidebar";
import SidebarBtn from "../Components/SidebarBtn";
import SearchForYouFeed from "./SubScreen/SearchForYouFeed";
import SearchTrendingFeed from "./SubScreen/SearchTrendingFeed";
import SearchNewsFeed from "./SubScreen/SearchNewsFeed";
import SearchSportsFeed from "./SubScreen/SearchSportsFeed";
import SearchEntertainmentFeed from "./SubScreen/SearchEntertainmentFeed";
import FAB from "../Components/FAB";

export default function Search({ isOpen, onClick, screeWidth }) {
  const [searchFeed, setSearchFeed] = useState(1);

  function changeSearchFeed() {
    switch (searchFeed) {
      case 1:
        return <SearchForYouFeed screenWidth={screeWidth} />;
        break;
      case 2:
        return <SearchTrendingFeed />;
        break;
      case 3:
        return <SearchNewsFeed />;
        break;
      case 4:
        return <SearchSportsFeed />;
        break;
      case 5:
        return <SearchEntertainmentFeed />;
        break;

      default:
        return <h1>No Feed Selected</h1>;
        break;
    }
  }

  return (
    <main className="md:w-[640px] flex flex-col text-white **:duration-200 ease-linear mb-16">
      <SearchAppbar onClick={onClick} />
      <Sidebar onClick={onClick} isOpen={isOpen} />
      <SearchFeedSelector selected={searchFeed} setSelected={setSearchFeed} />
      {changeSearchFeed()}
      <FAB />
    </main>
  );
}

export function SearchAppbar({ onClick, screeWidth }) {
  return (
    <header
      className={` z-40 py-2 px-4 flex gap-4 justify-between items-center bg-black/10 backdrop-blur-xs`}
    >
      <SidebarBtn onClick={onClick} screeWidth={screeWidth}/>
      <div className="flex border border-neutral-600 px-2 py-3 rounded-full items-center gap-2 flex-1">
        <Icon icon="magnifying-glass" style="text-sm p-1 text-neutral-500" />
        <input
          type="search"
          placeholder="Search"
          className="flex-1 placeholder:text-white text-sm min-w-30"
        />
      </div>
      <Icon icon="gear" />
    </header>
  );
}

function SearchFeedSelector({ selected, setSelected }) {
  const feeds = [
    {
      id: 1,
      label: "For You",
    },
    {
      id: 2,
      label: "Trending",
    },
    {
      id: 3,
      label: "News",
    },
    {
      id: 4,
      label: "Sports",
    },
    {
      id: 5,
      label: "Entertainment",
    },
  ];
  return (
    <div className="flex justify-evenly overflow-y-scroll hide-scrollbar border-b border-b-neutral-700">
      {feeds.map((feed) => {
        return (
          <button
            onClick={() => setSelected(feed.id)}
            className={`text-nowrap p-3 w-fit h-16  ${
              selected == feed.id
                ? "font-bold border-b-4 border-b-primary-500"
                : "font-semibold text-neutral-500"
            }
        `}
          >
            {feed.label}
          </button>
        );
      })}
    </div>
  );
}
