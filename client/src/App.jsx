import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { News } from "./pages/News";
import { Video } from "./pages/Video";
import { Lifestyle } from "./pages/LifeStyle";
import { Sports } from "./pages/Sports";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Entertaiment } from "./pages/Entertainment";
import CreateNews from "./pages/CreateNews";
import UserProvider from "./context/UserContext";

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/video" element={<Video />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/entertainment" element={<Entertaiment />} />
          <Route path="/createNews" element={<CreateNews />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
