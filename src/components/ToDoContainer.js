
import React from 'react'
import ToDoItem from './ToDoItem'

function ToDoContainer({handleModal, toDos, handleDelete}) {
    console.log('from container', toDos)

  return (
    <div className='to-do-container'>
        <h1 className='display-4 text-light mb-4'>To Do List</h1>
        <button type="button" className="btn btn-success mb-3" onClick={handleModal}>Add New Task</button>
        <ul className="list-group">
        {toDos &&
            toDos.map(item => (
              <React.Fragment key={item.id}>
                <ToDoItem task={item.task} date={item.date} id={item.id} handleDelete={handleDelete}/>
              </React.Fragment>
            ))
        }
        </ul>

        
    </div>
  )
}

export default ToDoContainer