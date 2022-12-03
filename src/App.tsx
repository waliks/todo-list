import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import AddItemForm from './components/AddItemForm';
import TaskDashboard from './components/TaskDashboard';
import TaskItem from './components/TaskItem';
import { TaskItemType } from './types/TaskItemType';
import EditTaskModal from './components/EditTaskModal';

function App() {
  const [taskList, setTaskList] = useState<TaskItemType[]>([]);

  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  const [taskTitle, setTaskTitle] = useState<string>('');

  const [taskId, setTaskId] = useState<number>(0);

  const handleAddTask = (inputText: string) => {
    setTaskList([
      ...taskList,
      {
        id: taskList.length ? taskList[taskList.length - 1].id + 1 : 0,
        title: inputText,
        done: false,
      },
    ]);
  };

  const handleEditTask = (
    selectedTaskTitle: string,
    selectedTaskId: number,
  ) => {
    setIsEditModalOpen(true);
    setTaskTitle(selectedTaskTitle);
    setTaskId(selectedTaskId);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
  };

  const handleSaveTask = (editedTaskTitle: string) => {
    taskList[taskId].title = editedTaskTitle;
  };

  return (
    <div className="todoapp stack-large">
      <Title />
      <AddItemForm onAddTask={handleAddTask} />
      <TaskDashboard />

      {taskList.map((item) => (
        <TaskItem taskData={item} onEditTask={handleEditTask} />
      ))}
      {isEditModalOpen && (
        <EditTaskModal
          taskTitle={taskTitle}
          onClose={handleCloseModal}
          onSave={handleSaveTask}
        />
      )}
    </div>
  );
}

export default App;
