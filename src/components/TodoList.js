import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos = [],
  deleteTodo,
  toggleTodo,
  editTodo,
  editDueDate,
  filterType,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
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

  const searchTodos = filteredTodos.filter((todo) => {
    return (
      todo.task && todo.task.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  return (
    <div>
      {/* search Box */}
      <input
        type="text"
        placeholder="Search Tasks"
        className="w-full px-4 py-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul>
        {" "}
        {searchTodos.length === 0 ? <p>No tasks found!</p> : null}
        {searchTodos.map((todo) => (
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
    </div>
  );
};

export default TodoList;
