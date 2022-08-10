import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { v4 as uuid } from "uuid";
import { useReducer } from "react";
import { taskReducer } from "./task-reducer";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [mode, setMode] = useState("work");
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      title: "Initial Task",
      description: "Task 1",
      focusTime: 10,
      breakTime: 5,
    },
  ]);

  const [state, taskDispatch] = useReducer(taskReducer, { tasks: tasks });
  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        showTaskModal,
        setShowTaskModal,
        state,
        taskDispatch,
        mode,
        setMode,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

const useTask = () => useContext(TaskContext);

export { TaskProvider, useTask };
