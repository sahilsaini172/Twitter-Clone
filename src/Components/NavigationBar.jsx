import Icon from "../Components/Icon";
import { Link } from "react-router";

export default function NavigationBar() {
  return (
    <footer className="fixed max-w-[430px] bottom-0 z-40 bg-black border-t border-t-neutral-700 p-4 w-full flex justify-between items-center text-xl">
      <NavigationBarItem icon="house" />
      <NavigationBarItem title="search" icon="magnifying-glass" />
      <NavigationBarItem title="grok" icon="react" type="brands" />
      <NavigationBarItem title="notification" icon="bell" />
      <NavigationBarItem title="message" icon="envelope" />
      <NavigationBarItem title="community" icon="user-group" />
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
