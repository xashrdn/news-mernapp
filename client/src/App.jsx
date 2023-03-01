import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { News } from "./pages/News";
import { Video } from "./pages/Video";
import { Sports } from "./pages/Sports";
import { Lifestyle } from "./pages/LifeStyle";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/Video" element={<Video />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
