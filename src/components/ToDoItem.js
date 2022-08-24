import React, { useState } from 'react';

function ToDoItem({ task, date, id, handleDelete }) {

  const [status, setStatus] = useState('not-started');

  
  return (
      <li className="list-group-item mb-1 pe-5 d-flex justify-content-between align-items-center rounded" id={status}>
            <span className='delete-todo-button' onClick={() => handleDelete(id)}>&times;</span>
            <span className='task-text fs-5'>{task}</span>
            <div>
              <small>Due date: {date}</small>
              <select className="form-select form-select-sm mt-2" onChange={(e) => setStatus(e.target.value)}>
                <option value='not-started'>not started</option>
                <option value='in-progress'>in progress</option>
                <option value='completed'>completed</option>
              </select>
            </div>
      </li>
  );
}

export default ToDoItem;
