import React from "react";
export const saveToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const loadFromLocalStorage = () => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
};

export const sortTodos = (todos = [], sortBy) => {
  if (!Array.isArray(todos)) {
    console.log("Error: todos is not an array", todos);
    return <p>Error Loading Task!</p>;
  }

  if (sortBy === "priority") {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return [...todos].sort(
      (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
    );
  }

  if (sortBy === "dueDate") {
    return [...todos].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  }
  return todos;
};
