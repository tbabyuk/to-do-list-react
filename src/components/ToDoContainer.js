
import React from 'react'
import ToDoItem from './ToDoItem'

function ToDoContainer({handleModal, toDos}) {
    console.log('from container', toDos)

  return (
    <div className='to-do-container'>
        <h2>Our to do list</h2>
        <button onClick={handleModal}>Add To Do</button>
        {toDos &&
            toDos.map(item => (
                <ToDoItem task={item.task} date={item.date}/>
            ))
        }
        
    </div>
  )
}

export default ToDoContainer