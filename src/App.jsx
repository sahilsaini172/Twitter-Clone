import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Screens/Home";
import Search from "./Screens/Search";
import Grok from "./Screens/Grok";
import Message from "./Screens/Message";
import Notification from "./Screens/Notification";
import Community from "./Screens/Community";

function App() {
  return (
    <main className="bg-black text-white min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/grok" element={<Grok />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/message" element={<Message />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
