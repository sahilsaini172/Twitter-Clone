import SidebarBtn from "../Components/SidebarBtn";
import Icon from "../Components/Icon";
import Sidebar from "../Components/Sidebar";
import { useState } from "react";

export default function Community({ isOpen, onClick }) {
  return (
    <main className="flex flex-col text-white **:duration-200 ease-linear mb-16">
      <CommunityAppbar onClick={onClick} />
      <Sidebar isOpen={isOpen} onClick={onClick} />
      <Pins />
      <CommunityPost />
      <CommunityPost />
      <CommunityPost />
      <CommunityPost />
      <CommunityPost />
    </main>
  );
}

function CommunityAppbar({ onClick }) {
  return (
    <header
      className={`z-40 py-2 px-4 flex justify-between items-center bg-black/10 backdrop-blur-xs border-b border-b-neutral-500`}
    >
      <div className="flex items-center gap-4">
        <SidebarBtn onClick={onClick} />
        <h1 className="text-xl font-bold">Communities</h1>
      </div>
      <Icon icon="gear" />
    </header>
  );
}

function Pins() {
  const pinsData = [
    { id: 1, label: "Sports" },
    { id: 2, label: "Technology" },
    { id: 3, label: "Art" },
    { id: 4, label: "Entertainment" },
    { id: 5, label: "Gaming" },
    { id: 6, label: "Politics" },
    { id: 7, label: "Business" },
    { id: 8, label: "Culture" },
    { id: 9, label: "Science" },
    { id: 10, label: "Food" },
    { id: 11, label: "Animals" },
    { id: 12, label: "Education" },
  ];

  return (
    <div className="flex py-2 px-4 overflow-x-scroll gap-1 hide-scrollbar">
      {pinsData.map((pin) => {
        return <Pin id={pin.id} label={pin.label} />;
      })}
    </div>
  );
}

function Pin({ id, label }) {
  const [selected, setSelected] = useState(false);
  function togglePin() {
    setSelected(!selected);
  }
  return (
    <span
      onClick={togglePin}
      key={id}
      className={`px-3 py-1 rounded-full ${
        selected ? "bg-primary-500 text-white outline-0 " : undefined
      } outline outline-neutral-500 text-sm font-bold w-fit`}
    >
      {label}
    </span>
  );
}

function CommunityPost() {
  return (
    <article className="flex flex-col py-2 px-4 border-b border-b-neutral-500">
      <div className="flex items-center gap-2 px-8 text-sm text-neutral-500">
        <Icon icon="user-group" />
        <p className="font-bold">Anime Club</p>
      </div>
      <div className="flex gap-1 mt-1 items-start">
        <img
          src="../img/img1.png"
          className="h-12 w-12 aspect-square rounded-full object-cover"
        />
        <div className="flex flex-col flex-1">
          <div className="flex gap-1 items-center justify-between ">
            <div className="flex items-center gap-1">
              <h2 className="font-bold">Anime Updates</h2>
              <p className="text-neutral-500">@animeupdates_</p>
              <p className="text-neutral-500"> &#183; 3h</p>
            </div>
            <Icon icon="ellipsis" />
          </div>
          <div className="flex flex-col">
            <p>
              'WISTORIA: Wand and Sword' Season 2 New Anime Trailer!
              <br />
              <br />
              Premieres April 2026
            </p>
            <img
              src="../img/img4.jpeg"
              alt=""
              className="my-2 rounded-2xl aspect-video object-cover border border-neutral-500"
            />
            <p className="line-clamp-2">
              <span className="text-sm text-neutral-500">From</span>
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.elit.
            </p>
            <div className="flex justify-between my-4 text-neutral-500 text-sm mr-4">
              <div className="flex gap-1 items-center">
                <Icon icon="message" />
                <p>70</p>
              </div>
              <div className="flex gap-1 items-center">
                <Icon icon="rotate" />
                <p>165</p>
              </div>
              <div className="flex gap-1 items-center">
                <Icon icon="heart" />
                <p>54</p>
              </div>
              <div className="flex gap-1 items-center">
                <Icon icon="chart-simple" />
                <p>127k</p>
              </div>
              <div className="flex gap-1 items-center">
                <Icon icon="bookmark" />
              </div>
              <div className="flex gap-1 items-center">
                <Icon icon="share" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
