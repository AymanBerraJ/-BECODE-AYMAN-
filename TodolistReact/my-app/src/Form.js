import React from "react";

export default function Form({ newTask, setNewTask, addTask }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a Task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
}
