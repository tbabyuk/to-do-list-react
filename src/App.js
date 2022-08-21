import AddToDoModal from "./components/AddToDoModal";
import ToDoContainer from "./components/ToDoContainer";
import {useState} from 'react';

function App() {

  const [modal, setModal] = useState(false);
  const [toDos, setToDos] = useState([
    {task: "buy groceries", date: "9/2/22"},
    {task: "do this also", date: "some date"}
  ]);

  const handleModal = (e) => {
    if(e.target.className === 'add-to-do-modal' || e.target.className === 'close-modal-button') {
      setModal(false)
    } else {
      setModal(true)
    }
  }

  const addToDos = (todos) => {
    console.log(todos)
    setToDos((old) => {
        return [...old, todos]
    })
  }

  return (
    <div className="App">
        <ToDoContainer handleModal={handleModal} toDos={toDos}/>

        {modal && <AddToDoModal handleModal={handleModal} addToDos={addToDos} />}
    </div>
  );
}

export default App;
