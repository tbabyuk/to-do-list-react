import React from 'react';

function ToDoItem({ task, date }) {
    console.log('from todo item', typeof toDos)

  return (
    <div className='to-do-item'>
            <h3>{task}</h3>
            <p>{date}</p>
    </div>
  );
}

export default ToDoItem;
