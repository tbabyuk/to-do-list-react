import AddToDoModal from "./components/AddToDoModal";
import ToDoContainer from "./components/ToDoContainer";
import {useState} from 'react';

function App() {

  const [modal, setModal] = useState(false);
  const [toDos, setToDos] = useState([]);

  const handleModal = (e) => {
    if(e.target.className === 'add-to-do-modal' || e.target.className === 'close-modal-button') {
      setModal(false)
    } else {
      setModal(true)
    }
  }

  return (
    <div className="App">
        <ToDoContainer handleModal={handleModal}/>

        {modal && <AddToDoModal handleModal={handleModal} />}
    </div>
  );
}

export default App;
