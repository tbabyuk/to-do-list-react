
import React from 'react'
import ToDoItem from './ToDoItem'

function ToDoContainer({handleModal}) {
  return (
    <div className='to-do-container'>
        <h2>Our to do list</h2>
        <button onClick={handleModal}>Add To Do</button>
        <ToDoItem />
    </div>
  )
}

export default ToDoContainer