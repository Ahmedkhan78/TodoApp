import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, toggleTodo, editTodo, editDueDate }) => {
  return (
    <div>
      {" "}
      {todos.length === 0 ? <p>No tasks found!</p> : null}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
          editDueDate={editDueDate}
        />
      ))}
    </div>
  );
};

export default TodoList;
