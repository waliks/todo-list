import React, { useState } from 'react';

type Props = {
  onAddTask: (taskTitle: string) => void;
};

function AddItemForm({ onAddTask }: Props) {
  const [inputText, setInputText] = useState('');

  const handleAdd = () => {
    if (inputText.trim() !== '') {
      onAddTask(inputText.trim());
      setInputText('');
    }
  };

  return (
    <form>
      <h2 className="label-wrapper">
        <label className="label__lg">Lista de tarefas PodCodar</label>
      </h2>
      <input
        type="text"
        className="input input__lg"
        autoComplete="off"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <button
        type="button"
        className="btn btn__primary btn__lg"
        onClick={handleAdd}
      >
        Add Task
      </button>
    </form>
  );
}
export default AddItemForm;
