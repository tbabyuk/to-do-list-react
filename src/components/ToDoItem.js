import React from 'react';

function ToDoItem({ task, date, id, handleDelete }) {

  const handleStatus = (e) => {
    console.log(e.target.parentElement.parentElement.id)
    if(e.target.value === 'not started') {
      e.target.parentElement.parentElement.id = 'todo-not-started'
    } else if(e.target.value === 'in progress') {
      e.target.parentElement.parentElement.id = 'todo-in-progress'
    } else if(e.target.value === 'completed') {
      e.target.parentElement.parentElement.id = 'todo-completed'
  }
}

  return (
      <li className="list-group-item mb-1 pe-5 d-flex justify-content-between align-items-center rounded" id="todo-not-started">
            <span className='delete-todo-button' onClick={() => handleDelete(id)}>&times;</span>
            <span className='task-text'>{task}</span>
            <div>
              <small>Due date: {date}</small>
              <select className="form-select form-select-sm mt-2" onChange={handleStatus}>
                <option value='not started'>not started</option>
                <option value='in progress'>in progress</option>
                <option value='completed'>completed</option>
              </select>
            </div>
      </li>
  );
}

export default ToDoItem;
