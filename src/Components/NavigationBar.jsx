import { useState } from "react";
import Icon from "../Components/Icon";
import { Link } from "react-router";
import { useEffect } from "react";

export default function NavigationBar({ screenWidth }) {
  let newStyle =
    screenWidth < 500
      ? "fixed bottom-0 z-40 bg-black border-t border-t-neutral-700 p-4 w-full flex justify-between items-center text-xl"
      : "fixed left-0 overflow-y-scroll top-0 bottom-0 flex flex-col items-center bg-black border-r border-r-neutral-700 text-2xl gap-8 py-4 px-2";
  if (screenWidth > 767) {
    newStyle =
      "overflow-y-scroll flex flex-col items-center bg-black text-2xl gap-8 py-4 px-2 border-x border-x-neutral-700";
  }

  return (
    <footer className={newStyle}>
      {screenWidth > 499 && (
        <Icon style="text-4xl" type="brands" icon="x-twitter" />
      )}
      <NavigationBarItem icon="house" />
      <NavigationBarItem title="search" icon="magnifying-glass" />
      <NavigationBarItem title="grok" icon="react" type="brands" />
      <NavigationBarItem title="notification" icon="bell" />
      <NavigationBarItem title="message" icon="envelope" />
      <NavigationBarItem title="community" icon="user-group" />
      {screenWidth > 499 && (
        <>
          <NavigationBarItem title="" icon="briefcase" />
          <NavigationBarItem title="" icon="x-twitter" type="brands" />
          <NavigationBarItem title="" icon="bolt" />
          <NavigationBarItem title="" icon="user" />
          <div className="flex flex-col justify-center">
            <Icon icon="ellipsis" style="" />
          </div>
          <div className="flex items-center aspect-square justify-center w-12 h-12 bg-white rounded-full">
            <Icon style="text-black" />
          </div>
        </>
      )}
    </footer>
  );
}

export function NavigationBarItem({
  title = "",
  type = "solid",
  icon = "add",
}) {
  return (
    <button className="hover:text-primary-100 px-2 flex flex-col justify-center ">
      <Link to={"/" + title.toLowerCase()}>
        <Icon icon={icon} type={type} style="z-10" />
      </Link>
    </button>
  );
}
