import "./App.css";
import { Routes, Route } from "react-router-dom";
import { TasksPage } from "./Pages/TasksPage/TasksPage";
import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { TimerPage } from "./Pages/TimerPage/TimerPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/tasks/:id" element={<TimerPage />} />
      </Routes>
    </div>
  );
}

export default App;
