import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Screens/Home";
import Search from "./Screens/Search";
import Grok from "./Screens/Grok";
import Message from "./Screens/Message";
import Notification from "./Screens/Notification";
import Community from "./Screens/Community";
import NavigationBar from "./Components/NavigationBar";
import { useState, useEffect } from "react";

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
    <main className="bg-black sm:ml-17 text-white **:duration-200 **:ease-linear scroll-smooth">
      <h1>{screenWidth}</h1>
      <BrowserRouter>
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
        <NavigationBar screenWidth={screenWidth} />
      </BrowserRouter>
    </main>
  );
}

export default App;
