import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

interface TaskItemProps {
  taskTitle: string;
  onClose: () => void;
  onSave: (editedTaskTitle: string) => void;
}

function EditTaskModal({ taskTitle, onClose, onSave }: TaskItemProps) {
  const [inputText, setInputText] = useState<string>(taskTitle);

  const handleSaveTask = () => {
    onSave(inputText);
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <Modal isOpen style={customStyles} contentLabel="Example Modal">
        <button type="button" onClick={handleClose}>
          &#10005;
        </button>
        <div>Edit the task title</div>
        <form>
          <input
            id="edit-title"
            defaultValue={taskTitle}
            onChange={(e) => setInputText(e.target.value)}
          />
        </form>
        <button type="button" onClick={handleSaveTask}>
          Save
        </button>
      </Modal>
    </div>
  );
}

export default EditTaskModal;
