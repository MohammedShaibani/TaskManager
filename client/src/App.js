import './App.css';
import {useState} from "react";

function App() {

  const [task, setTask] = useState('');
  const [assignedTo, setAssignedTo] = useState('');


  return (
    <div className="App">
      <div className="information">
        <label>Task</label>
        <input type="text" onChange={(event) => (setTask(event.target.value))} />
        <label>Assigned To</label>
        <input type="text" onChange={(event) => (setAssignedTo(event.target.value))}/>
        <button>Add Task</button>
      </div>
    </div>
  );
}

export default App;
