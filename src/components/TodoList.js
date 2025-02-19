import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, toggleTodo, editTodo }) => {
  return (
    <div>
      {" "}
      {todos.length === 0 ? <p>No tasks found!</p> : null}
      {/* ✅ Yahan () brackets ka use karein taaki `map` function return kare */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
