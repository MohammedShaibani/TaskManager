import './App.css';
import {useState} from "react";
import Axios from 'axios';


function App() {

  const [task, setTask] = useState('');
  const [assignedTo, setAssignedTo] = useState('');

  const addTask = () => {
    Axios.post("http://localhost:3001/create", {
      task: task, 
      assignedTo: assignedTo
    }).then(() => {
      console.log('success');
    });
  };

  return (
    <div className="App">
      <div className="information">
        <label>Task</label>
        <input type="text" onChange={(event) => (setTask(event.target.value))} />
        <label>Assigned To</label>
        <input type="text" onChange={(event) => (setAssignedTo(event.target.value))}/>
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
}

export default App;
