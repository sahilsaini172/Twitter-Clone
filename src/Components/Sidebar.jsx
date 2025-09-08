import Icon from "./Icon";

export default function Sidebar({ isOpen, onClick }) {
  return (
    <div
      className={`fixed inset-0  duration-300 ease-linear ${
        isOpen ? "-z-10" : "bg-white/10 backdrop-blur-sm z-50"
      }`}
    >
      <div className={`flex h-full ${isOpen ? "-translate-x-full" : ""}`}>
        <div className="w-2/3 bg-black p-4">
          <SidebarHeader />
          <SidebarItem icon="comment" title="Chat" />
          <SidebarItem icon="user" title="Profile" />
          <SidebarItem type="brands" icon="x-twitter" title="Premium" />
          <SidebarItem icon="user-group" title="Communities" />
          <SidebarItem icon="list" title="Lists" />
          <SidebarItem icon="bookmark" title="Bookmarks" />
          <SidebarItem icon="bolt" title="Verified Orgs" />
          <SidebarItem icon="money-bills" title="Monetization" />
          <SidebarItem icon="arrow-up-right-from-square" title="Ads" />
          <SidebarItem icon="briefcase" title="Jobs" />
          <SidebarItem icon="gear" title="Settings and Privacy" />
          <SidebarItem icon="right-from-bracket" title="Log out" />
        </div>
        <div onClick={onClick} className="flex-1 bg-transparent"></div>
      </div>
    </div>
  );
}

function SidebarHeader() {
  return (
    <header className="flex  flex-col">
      <div className="flex justify-between items-center">
        <div className="w-10 h-10 flex justify-center items-center rounded-full bg-primary-700 text-lg">
          S
        </div>
        <div className="px-1.5 py-1 border border-primary-500/50 rounded-full">
          <Icon />
        </div>
      </div>
      <h2 className="text-lg font-semibold mt-2">John Doe</h2>
      <p className="text-neutral-500 font-light">@JohnDoe121</p>
      <div className="flex items-center font-light text-neutral-500 gap-4 my-4">
        <p>
          <span className="font-semibold text-white">5 </span>Following
        </p>
        <p>
          <span className="font-semibold text-white">0 </span>Followers
        </p>
      </div>
    </header>
  );
}

function SidebarItem({ icon, title = "title", type = "solid" }) {
  return (
    <div className="flex items-center text-xl gap-6 font-bold py-4">
      <Icon type={type} icon={icon} />
      <h3>{title}</h3>
    </div>
  );
}
