import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos = [],
  deleteTodo,
  toggleTodo,
  editTodo,
  editDueDate,
  filterType,
}) => {
  if (!Array.isArray(todos)) {
    console.log("Error: todos is not an array", todos);
    return <p>Error Loading Task!</p>;
  }
  const filteredTodos = todos.filter((todo) => {
    if (filterType === "Completed") return todo.completed;
    if (filterType === "Pending") return !todo.completed;
    if (filterType === "High Priority") return todo.priority === "High";
    return true;
  });
  return (
    <ul>
      {" "}
      {todos.length === 0 ? <p>No tasks found!</p> : null}
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
          editDueDate={editDueDate}
        />
      ))}
    </ul>
  );
};

export default TodoList;
