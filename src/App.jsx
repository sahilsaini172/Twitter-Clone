import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Screens/Home";
import Search from "./Screens/Search";
import Grok from "./Screens/Grok";
import Message from "./Screens/Message";
import Notification from "./Screens/Notification";
import Community from "./Screens/Community";
import NavigationBar from "./Components/NavigationBar";
import { useState } from "react";

function App() {
  //Sidebar
  const [isOpen, setIsOpen] = useState(true);
  function handleSidebarToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <main className="bg-black sm:ml-17 text-white **:duration-200 **:ease-linear scroll-smooth">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home isOpen={isOpen} onClick={handleSidebarToggle} />}
          />
          <Route
            path="/search"
            element={<Search isOpen={isOpen} onClick={handleSidebarToggle} />}
          />
          <Route path="/grok" element={<Grok />} />
          <Route
            path="/notification"
            element={
              <Notification isOpen={isOpen} onClick={handleSidebarToggle} />
            }
          />
          <Route
            path="/message"
            element={<Message isOpen={isOpen} onClick={handleSidebarToggle} />}
          />
          <Route
            path="/community"
            element={
              <Community isOpen={isOpen} onClick={handleSidebarToggle} />
            }
          />
        </Routes>
        <NavigationBar />
      </BrowserRouter>
    </main>
  );
}

export default App;
