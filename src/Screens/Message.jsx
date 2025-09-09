import Sidebar from "../Components/Sidebar";
import Icon from "../Components/Icon";
import SidebarBtn from "../Components/SidebarBtn";
import FAB from "../Components/FAB";

export default function Message({ isOpen, onClick }) {
  return (
    <main className="md:w-[640px] flex flex-col text-white **:duration-200 ease-linear mb-16">
      <MessageAppbar onClick={onClick} />
      <Sidebar onClick={onClick} isOpen={isOpen} />
      <div className="flex items-center justify-between gap-4 px-8 py-4">
        <div className="gap-6 flex items-center">
          <Icon icon="message" style="text-2xl" />
          <h2 className="text-lg font-semibold">Chat</h2>
        </div>
        <span className="inline-block bg-primary-500 text-sm px-2 rounded-sm">
          Beta
        </span>
      </div>
      <section className="flex flex-col p-8 gap-2">
        <h2 className="text-4xl font-bold w-full ">Welcome to your inbox!</h2>
        <p className="text-neutral-500 text-left w-full">
          Drop a line, share posts and more with private conversations between
          you and others on X.
        </p>
        <button className="bg-primary-500 font-bold text-lg w-fit px-6 py-3 rounded-full mt-4">
          Write a message
        </button>
      </section>
      <FAB icon="envelope" />
    </main>
  );
}

function MessageAppbar({ onClick }) {
  return (
    <header
      className={`z-40 py-2 px-4 flex justify-between items-center bg-black/10 backdrop-blur-xs`}
    >
      <div className="flex items-center gap-4">
        <SidebarBtn onClick={onClick} />
        <h1 className="text-xl font-bold">Messages</h1>
      </div>
      <Icon icon="gear" />
    </header>
  );
}
