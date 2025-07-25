import React from "react";

function TodoItem({ todo, toggleComplete, deleteTodo }) {
    return (
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
            <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
            <div className="buttons">
                <button onClick={() => toggleComplete(todo.id)}>Tamamla</button>
                <button onClick={() => deleteTodo(todo.id)} className="delete-btn">Sil</button>
            </div>
        </li>
    );
}

export default TodoItem;