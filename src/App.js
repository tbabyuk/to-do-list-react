import AddToDoModal from "./components/AddToDoModal";
import ToDoContainer from "./components/ToDoContainer";
import {useState} from 'react';

function App() {

  const [modal, setModal] = useState(false);
  const [toDos, setToDos] = useState([
    {task: "buy groceries", date: "9/2/22", id: 1},
    {task: "do this also", date: "some date", id: 2}
  ]);

  const handleDelete = (id) => {
    console.log(id)
    console.log(toDos[0].id)
    const newArray = toDos.filter(item => item.id !== id)
    setToDos(newArray)
  }

  const handleModal = (e) => {
    if(e.target.className === 'add-to-do-modal' || e.target.className === 'close-modal-button') {
      setModal(false)
    } else {
      setModal(true)
    }
  }

  const addToDos = (todo) => {
    const addId = todo.id = toDos.length + 1;
    console.log(addId)
    console.log(todo)
    setToDos([...toDos, todo])
  }

  return (
    <div className="App">
        <ToDoContainer handleModal={handleModal} toDos={toDos} handleDelete={handleDelete}/>

        {modal && <AddToDoModal handleModal={handleModal} addToDos={addToDos} />}
    </div>
  );
}

export default App;
