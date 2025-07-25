import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: task,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTask("");
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="input-area">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Yeni görev ekle..."
        />
        <button onClick={handleAdd}>Ekle</button>
      </div>
      <TodoList
        todos={todos}
        toggleComplete={handleToggleComplete}
        deleteTodo={handleDelete}
      />
    </div>
  );
}

export default App;