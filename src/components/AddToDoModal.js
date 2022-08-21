import React, {useState} from 'react';


function AddToDoModal({handleModal, addToDos}) {

  const [task, setTask] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      task: task,
      date: date
    }

    addToDos(todo)

    handleModal(e)

  }

  return (
    <div className='add-to-do-modal' onClick={handleModal}>
      <span className='close-modal-button'>&times;</span>
      <div className='add-to-do-container'>
        <form className='add-to-do-form' onSubmit={handleSubmit}>
          <div className='input-group'>
            <label htmlFor='task'>Task:</label>
            <input type='text' id='task' onChange={(e) => setTask(e.target.value)} value={task}/>
          </div>
          <div className='input-group'>
            <label htmlFor='due-date'>Due Date:</label>
            <input type='date' id='due-date' onChange={(e) => setDate(e.target.value)} value={date} />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddToDoModal;
