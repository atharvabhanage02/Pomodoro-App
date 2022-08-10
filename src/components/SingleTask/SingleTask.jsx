import { useState } from "react";
import { useTask } from "../../Context/task-context";
import { AiOutlineClockCircle, FiEdit, MdDelete } from "../../Utils/icons";
import { TaskModal } from "../TaskModal/TaskModal";

const SingleTask = ({ taskInfo }) => {
  const { taskDispatch } = useTask();
  const [editTaskModal, setEditTaskModal] = useState(false);
  const { id, title, description, focusTime, breakTime } = taskInfo;

  return (
    <div>
      {editTaskModal && (
        <TaskModal
          setEditModal={setEditTaskModal}
          editModal={editTaskModal}
          id={id}
          title={title}
          description={description}
          focusTime={focusTime}
          breakTime={breakTime}
        />
      )}
      <div className="single-task">
        <p>{title}</p>
        <div>
          <AiOutlineClockCircle className="filter-icon pomodoro-icons" />
          <FiEdit
            className="filter-icon pomodoro-icons"
            onClick={() => setEditTaskModal(true)}
          />
          <MdDelete
            className="filter-icon pomodoro-icons"
            onClick={() => taskDispatch({ type: "REMOVE_TASK", payload: id })}
          />
        </div>
      </div>
    </div>
  );
};
export { SingleTask };
