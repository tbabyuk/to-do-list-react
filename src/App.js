import AddToDoModal from "./components/AddToDoModal";
import ToDoContainer from "./components/ToDoContainer";
import {useState} from 'react';
import {nanoid} from 'nanoid';

function App() {

  const [modal, setModal] = useState(false);
  const [toDos, setToDos] = useState([
    {task: "buy groceries", date: "2022-08-22", id: nanoid()},
    {task: "call grandpa", date: "2022-08-23", id: nanoid()}
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
    todo.id = nanoid();
    setToDos([...toDos, todo]);
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
