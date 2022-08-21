import React from 'react';

function ToDoItem({ task, date, id, handleDelete }) {

  return (
      <li className="list-group-item mb-1 pe-5 d-flex justify-content-between align-items-center rounded">
            <span className='delete-todo-button' onClick={() => handleDelete(id)}>&times;</span>
            <span className='task-text'>{task}</span>
            <div>
              <small>Due date: {date}</small>
              <select className="form-select form-select-sm mt-2">
                <option value='not started'>not started</option>
                <option value='in progress'>in progress</option>
                <option value='completed'>completed</option>
              </select>
            </div>
      </li>
  );
}

export default ToDoItem;
