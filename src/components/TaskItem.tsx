import React, { useState } from 'react';
import { TaskItemType } from '../types/TaskItemType';

interface TaskItemProps {
  taskData: TaskItemType;
  onEditTask: (taskTitle: string, taskId: number) => void;
}

function TaskItem({ taskData, onEditTask }: TaskItemProps) {
  const [isChecked, setIsChecked] = useState<boolean>(taskData.done);

  const handleEdit = () => {
    onEditTask(taskData.title, taskData.id);
  };

  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input
          id={taskData.id.toString()}
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label className="todo-label" htmlFor="todo-0">
          {taskData.title}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={handleEdit}>
          Edit
          <span className="visually-hidden" />
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden" />
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
