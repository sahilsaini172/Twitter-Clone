import SidebarBtn from "../Components/SidebarBtn";
import Icon from "../Components/Icon";
import Sidebar from "../Components/Sidebar";
import { useState } from "react";

export default function Notification({ isOpen, onClick }) {
  const [notificationFeed, setNotificationFeed] = useState(1);

  return (
    <main className="flex flex-col text-white **:duration-200 ease-linear mb-16">
      <NotificationAppbar onClick={onClick} />
      <Sidebar onClick={onClick} isOpen={isOpen} />
      <NotificationFeedSelector
        notificationFeed={notificationFeed}
        setNotificationFeed={setNotificationFeed}
      />
      {notificationFeed == 1 && <NotificationAllFeed />}
      {notificationFeed == 2 && <NotificationVerifiedFeed />}
      {notificationFeed == 3 && <NotificationMentionsFeed />}
    </main>
  );
}

export function NotificationAppbar({ onClick }) {
  return (
    <header
      className={`z-40 py-2 px-4 flex justify-between items-center bg-black/10 backdrop-blur-xs`}
    >
      <div className="flex items-center gap-4">
        <SidebarBtn onClick={onClick} />
        <h1 className="text-xl font-bold">Notifications</h1>
      </div>
      <Icon icon="gear" />
    </header>
  );
}

export function NotificationFeedSelector({
  notificationFeed,
  setNotificationFeed,
}) {
  return (
    <div className="flex justify-evenly border-b border-b-neutral-700">
      <button
        onClick={() => setNotificationFeed(1)}
        className={`p-3 w-fit h-16 ${
          notificationFeed == 1
            ? "font-bold border-b-4 border-b-primary-500"
            : "font-semibold text-neutral-500"
        }`}
      >
        All
      </button>
      <button
        onClick={() => setNotificationFeed(2)}
        className={`p-3 w-fit h-16 ${
          notificationFeed == 2
            ? "font-bold border-b-4 border-b-primary-500"
            : "font-semibold text-neutral-500"
        }`}
      >
        Verified
      </button>
      <button
        onClick={() => setNotificationFeed(3)}
        className={`p-3 w-fit h-16 ${
          notificationFeed == 3
            ? "font-bold border-b-4 border-b-primary-500"
            : "font-semibold text-neutral-500"
        }`}
      >
        Mentions
      </button>
    </div>
  );
}

function NotificationAllFeed() {
  return (
    <section className="flex flex-col">
      <div className="flex gap-2 border-b border-b-neutral-500 p-4">
        <Icon icon="star" style="text-2xl text-purple-500" />
        <div className="flex flex-col flex-1 gap-2">
          <div className="flex justify-between items-center">
            <img
              src="../img/img1.png"
              className="w-10 h-10 rounded-full object-cover aspect-square"
            />
            <Icon icon="ellipsis" style="text-neutral-500" />
          </div>
          <div className="flex justify-between items">
            <h2 className="text-lg font-semibold">Elon Musk</h2>
            <p className="text-neutral-500">6h</p>
          </div>
          <p className="text-neutral-500">Grok</p>
        </div>
      </div>
      <div className="md:w-[640px] flex gap-4 border-b border-b-neutral-500 p-4">
        <Icon type="brands" icon="x-twitter" style="text-2xl" />
        <p>
          There was a login to your account @johnDoe121 from a new device on sep
          05, 2025. Review it now.
        </p>
        <p className="text-nowrap text-neutral-500 ">Sep 5</p>
      </div>
    </section>
  );
}

function NotificationVerifiedFeed() {
  return (
    <section className="flex flex-col items-center">
      <img src="../img/verified.png" className="max-w-[200px] m-8" />
      <h2 className="text-4xl font-bold ">Nothing to see here &#x2015; yet</h2>
      <p className="text-neutral-500 w-1/2">
        Likes, mentions, reposts, and a whole lot more &#x2015; when it comes
        from a verified account, you'll find it here.{" "}
        <span className="font-bold inline-block underline text-white">
          Learn more
        </span>
      </p>
    </section>
  );
}

function NotificationMentionsFeed() {
  return (
    <section className="flex flex-col p-8 gap-2 items-center">
      <h2 className="text-4xl font-bold ">Nothing to see here &#x2015; yet</h2>
      <p className="text-neutral-500 text-left w-full">
        When someone mentions you, you'll find it here.
      </p>
    </section>
  );
}
