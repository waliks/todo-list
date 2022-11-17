import React, { useState } from 'react';

type Props = {
  onAddTask: (taskTitle: string) => void;
};

function AddItemForm({ onAddTask }: Props) {
  const domInputId = 'new-todo-input';

  const [inputText, setInputText] = useState('');

  const handleAdd = () => {
    const getValue: any = document.getElementById(domInputId);

    if (inputText.trim() !== '') {
      onAddTask(inputText.trim());
      getValue.value = '';
      setInputText('');
    }
  };

  return (
    <form>
      <h2 className="label-wrapper">
        <label htmlFor={domInputId} className="label__lg">
          Lista de tarefas PodCodar
        </label>
      </h2>
      <input
        type="text"
        id={domInputId}
        className="input input__lg"
        name={domInputId}
        autoComplete="off"
        onChange={(e) => setInputText(e.target.value)}
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
