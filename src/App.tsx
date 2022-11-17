import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import AddItemForm from './components/AddItemForm';
import TaskDashboard from './components/TaskDashboard';
import TaskItem from './components/TaskItem';
import { TaskItemType } from './types/TaskItemType';

function App() {
  const [list, setList] = useState<TaskItemType[]>([]);

  const handleAddTask = (taskTitle: string) => {
    const newList = [...list];
    newList.push({
      id: list.length ? list[list.length - 1].id + 1 : 0,
      title: taskTitle,
      done: false,
    });
    setList(newList);
  };

  return (
    <div className="todoapp stack-large">
      <Title />
      <AddItemForm onAddTask={handleAddTask} />
      <TaskDashboard />
      {list.map((item) => (
        <TaskItem taskData={item} />
      ))}
    </div>
  );
}

export default App;
