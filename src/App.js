import AddToDoModal from "./components/AddToDoModal";
import ToDoContainer from "./components/ToDoContainer";
import {useState} from 'react';

function App() {

  const [modal, setModal] = useState(false);
  const [toDos, setToDos] = useState([
    {task: "buy groceries", date: "8/23/22", id: 1},
    {task: "call grandpa", date: "8/24/22", id: 2}
  ]);

  const handleDelete = (id) => {
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
    todo.id = toDos.length + 1;
    setToDos([...toDos, todo]);
    console.log(123)
    setModal(false)
  }

  return (
    <div className="App">
        <ToDoContainer handleModal={handleModal} toDos={toDos} handleDelete={handleDelete}/>
        {modal && <AddToDoModal handleModal={handleModal} addToDos={addToDos} />}
    </div>
  );
}

export default App;
