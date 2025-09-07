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
    <main className="bg-black text-white min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home isOpen={isOpen} onClick={handleSidebarToggle} />}
          />
          <Route path="/search" element={<Search />} />
          <Route path="/grok" element={<Grok />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/message" element={<Message />} />
          <Route path="/community" element={<Community />} />
        </Routes>
        <NavigationBar />
      </BrowserRouter>
    </main>
  );
}

export default App;
