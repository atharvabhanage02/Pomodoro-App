import { useParams } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { Timer } from "../../components/Timer/Timer";
import { TimerDetails } from "../../components/TimerDetails/TimerDetails";
import { useTask } from "../../Context/task-context";
import "./timerPage.css";
const TimerPage = () => {
  const params = useParams();
  const { tasks, state } = useTask();
  const currentTask = state.tasks.find((task) => task.id === params.id);
  return (
    <div>
      <Navbar />
      <div className="main-container timer-with-details">
        <Timer
          focusTime={currentTask.focusTime}
          breakTime={currentTask.breakTime}
          // currentTask={currentTask}
        />
        <TimerDetails currentTask={currentTask} />
      </div>
    </div>
  );
};
export { TimerPage };
