import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Homework from "./Homework";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homework" element={<Homework />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
