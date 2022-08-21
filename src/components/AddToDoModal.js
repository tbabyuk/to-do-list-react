import React, { useState } from 'react';

function AddToDoModal({ handleModal, addToDos }) {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task && date) {
      const todo = {
        task: task,
        date: date,
      };
      addToDos(todo);
    } else {
      setError('Please enter task and date before pressing submit')
    }
  };


  const handleTask = (e) => {
    setTask(e.target.value)
    if(e.target.value.length === e.target.maxLength) {
      setError("You've reached the maximum allowed characters!")
    } else {
      setError("")
    }
  }

  return (
    <div className='add-to-do-modal' onClick={handleModal}>
      <span className='close-modal-button'>&times;</span>
      <div className='add-to-do-container'>
        <form className='add-to-do-form' onSubmit={handleSubmit}>
          <div className='input-group'>
            <label htmlFor='task'>Task:</label>
            <input
              className='rounded'
              type='text'
              id='task'
              onChange={handleTask}
              value={task}
              maxLength={30}
            />
          </div>
          <div className='input-group'>
            <label htmlFor='due-date'>Due Date:</label>
            <input
              className='rounded'
              type='date'
              id='due-date'
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </div>
          <button className="btn btn-success mb-3">Add Task</button>
          <small className="text-danger mt-0">{error}</small>
        </form>
      </div>
    </div>
  );
}

export default AddToDoModal;
