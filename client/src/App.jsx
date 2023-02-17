import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lifestyle from "./pages/LifeStyle";
import Sports from "./pages/Sports"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/sports" element={<Sports />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
