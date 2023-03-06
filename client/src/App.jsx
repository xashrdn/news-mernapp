import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { News } from "./pages/News";
import { Video } from "./pages/Video";
import { Lifestyle } from "./pages/LifeStyle";
import { Sports } from "./pages/Sports";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Entertaiment } from "./pages/Entertainment";
import { NewsInfo } from "./pages/NewsInfo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/Video" element={<Video />} />
        <Route path="/Lifestyle" element={<Lifestyle />} />
        <Route path="/Sports" element={<Sports />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Entertainment" element={<Entertaiment />} />
        <Route path="/NewsInfo" element={<NewsInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
