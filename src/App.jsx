import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Screens/Home";
import Search from "./Screens/Search";
import Grok from "./Screens/Grok";
import Message from "./Screens/Message";
import Notification from "./Screens/Notification";
import Community from "./Screens/Community";
import NavigationBar from "./Components/NavigationBar";
import { useState, useEffect } from "react";
import News from "./Components/News";
import TrendingTopic from "./Components/TrendingTopic";

function App() {
  //Sidebar
  const [isOpen, setIsOpen] = useState(true);

  //ScreenWidth
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    //update on resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleSidebarToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <main className="min-h-screen lg:m-0 lg:border-0 bg-black md:flex md:justify-center md:ml-0 md:border-r md:border-r-neutral-700 sm:ml-17 text-white **:duration-200 **:ease-linear scroll-smooth">
      <BrowserRouter>
        <NavigationBar screenWidth={screenWidth} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isOpen={isOpen}
                onClick={handleSidebarToggle}
                screenWidth={screenWidth}
              />
            }
          />
          <Route
            path="/search"
            element={
              <Search
                isOpen={isOpen}
                onClick={handleSidebarToggle}
                screenWidth={screenWidth}
              />
            }
          />
          <Route path="/grok" element={<Grok />} />
          <Route
            path="/notification"
            element={
              <Notification
                isOpen={isOpen}
                onClick={handleSidebarToggle}
                screenWidth={screenWidth}
              />
            }
          />
          <Route
            path="/message"
            element={
              <Message
                isOpen={isOpen}
                onClick={handleSidebarToggle}
                screenWidth={screenWidth}
              />
            }
          />
          <Route
            path="/community"
            element={
              <Community
                isOpen={isOpen}
                onClick={handleSidebarToggle}
                screenWidth={screenWidth}
              />
            }
          />
        </Routes>
        {screenWidth > 987 && <SideSearch />}
      </BrowserRouter>
    </main>
  );
}

export default App;

function SideSearch() {
  return (
    <div className="flex flex-col w-1/3 gap-4 overflow-y-scroll border-l border-l-neutral-700">
      <input
        type="search"
        placeholder="Search"
        className="px-4 py-3 rounded-full border border-neutral-500 m-4"
      />
      <section className="mx-4  border border-neutral-700 rounded-2xl flex flex-col p-4">
        <header className="text-xl font-bold">Today's News</header>
        <News />
        <News />
        <News />
      </section>
      <section className="  flex flex-col p-4 mx-4 border border-neutral-700 rounded-2xl text-sm text-neutral-500 gap-6">
        <TrendingTopic />
        <TrendingTopic />
        <TrendingTopic />
        <TrendingTopic />
      </section>
    </div>
  );
}
