import React, { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
import Form from "./Form";
import TodoList from "./Todolist";

function App() {
  // useState
  const [newTask, setNewTask] = useState("");

  const [tasks, setTasks] = useState(() => {
    const localData = localStorage.getItem("Tasks");
    return localData ? JSON.parse(localData) : [];
  });

  // Save todos to localStorage
  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
  }, [tasks]); // <<- look here

  // function add
  function addTask() {
    if (!newTask) {
      alert("Enter a task");
      return
    }

    const task = {
      id: Math.floor(Math.random() * 1000),
      value: newTask,
    };

    setTasks((oldList) => [...oldList, task]);
    setNewTask("");
  }

  // function delete
  function deleteTask(id) {
    const newArray = tasks.filter((task) => task.id !== id);
    setTasks(newArray);
  }

  return (
    <div className="App">
      <h1>Todo List App</h1>
      <Form
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
      />
      <TodoList tasks={tasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
