import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { Home } from "./Pages/Home/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
