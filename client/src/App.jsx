import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { News } from "./pages/News";
import { Video } from "./pages/Video";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/News" element={<News/>}/>
        <Route path="/Video" element={<Video/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
