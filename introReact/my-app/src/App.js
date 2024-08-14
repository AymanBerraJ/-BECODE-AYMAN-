import React, {useState} from "react";
import "./App.css";

function App() {

  // useState

  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])

  // function add

  function addTask() {
    

    if(!newTask){
      alert('Enter a task')
      return
    }

    const task = {
      id: Math.floor(Math.random() * 1000),
      value: newTask
    }

    setTasks(oldList => [...oldList, task])
    setNewTask('')

    console.log(tasks);
    
    
  }

  // function delete

  function deleteTask(id) {

    const newArray = tasks.filter(task => task.id !== id)
    setTasks(newArray)
  }
 
  // no more function


  return (
    <div className="App">

      <h1> Todo List App</h1>

      <input
      type="text"
      placeholder="Enter a Task..."
      onChange={e => setNewTask(e.target.value)}
      />

      <button onClick={() => addTask()}>Click</button>

      <ul>
        {tasks.map(task => {
          return(
            <li key={task.id}>{task.value} <button onClick={() => deleteTask(task.id)}>❌</button></li>
          )
        })}
      </ul>
    </div>

  );
}

export default App;

