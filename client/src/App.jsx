import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { News } from "./pages/News";
import { Video } from "./pages/Video";
import { Lifestyle } from "./pages/LifeStyle";
import { Sports } from "./pages/Sports";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/Video" element={<Video />} />
        <Route path="/Lifestyle" element={<Lifestyle />} />
        <Route path="/Sports" element={<Sports />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
