import "./App.css";
import { Routes, Route } from "react-router-dom";
import { TasksPage } from "./Pages/TasksPage/TasksPage";
import { LandingPage } from "./Pages/LandingPage/LandingPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tasks" element={<TasksPage />} />
      </Routes>
    </div>
  );
}

export default App;
