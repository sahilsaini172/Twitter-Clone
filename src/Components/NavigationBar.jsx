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
  } else if (screenWidth > 1279) {
    newStyle =
      "overflow-y-scroll flex justify-start flex-col items-center bg-black text-2xl gap-8 py-4 px-2 border-x border-x-neutral-700";
  }

  return (
    <footer className={`${newStyle}`}>
      {screenWidth > 499 && (
        <Icon style="text-4xl xl:w-full" type="brands" icon="x-twitter" />
      )}
      <NavigationBarItem screenWidth={screenWidth} icon="house" title="Home" />
      <NavigationBarItem screenWidth={screenWidth} title="Search" icon="magnifying-glass" />
      <NavigationBarItem screenWidth={screenWidth} title="Grok" icon="react" type="brands" />
      <NavigationBarItem screenWidth={screenWidth} title="Notification" icon="bell" />
      <NavigationBarItem screenWidth={screenWidth} title="Message" icon="envelope" />
      <NavigationBarItem screenWidth={screenWidth} title="Community" icon="user-group" />
      {screenWidth > 499 && (
        <>
          <NavigationBarItem screenWidth={screenWidth} title="Jobs" icon="briefcase" />
          <NavigationBarItem screenWidth={screenWidth} title="Premium" icon="x-twitter" type="brands" />
          <NavigationBarItem screenWidth={screenWidth} title="Verified Orgs" icon="bolt" />
          <NavigationBarItem screenWidth={screenWidth} title="Profile" icon="user" />
          <div className="flex gap-2 items-center xl:pr-12 xl:w-full">
            <Icon icon="ellipsis" style="" />
            <h2 className="sm:max-xl:hidden ">More</h2>
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
  screenWidth = 200,
}) {
  const newTitle =
    title == "Home" ? "" : title.charAt(0).toLowerCase() + title.slice(1);
  return (
    <button className="xl:w-full xl:pr-12 hover:text-primary-100 px-2 flex items-center ">
      <Link to={"/" + newTitle} className="flex items-center gap-2">
        <Icon icon={icon} type={type} style="z-10" />
        {screenWidth > 1279 && (
          <h2 className="text-nowrap">{title}</h2>
        )}
      </Link>
    </button>
  );
}
