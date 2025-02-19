import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterDropdown from "./components/FilterDropdown";
import "./App.css";
import { saveToLocalStorage, loadFromLocalStorage } from "./utils/localStorage";

function App() {
  const [todos, setTodos] = useState([]);
  const [filterType, setFilterType] = useState("All");

  useEffect(() => {
    setTodos(loadFromLocalStorage);
  }, []);

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    saveToLocalStorage(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    saveToLocalStorage(newTodos);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });
    setTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
  };
  const editTodo = (id, newTask) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, task: newTask } : todo;
    });
    setTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
  };
  const editDueDate = (id, newDate) => {
    const updatedDueDate = todos.map((todo) =>
      todo.id === id ? { ...todo, dueDate: newDate } : todo
    );
    setTodos(updatedDueDate);
    saveToLocalStorage(updatedDueDate);
  };
  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <FilterDropdown filterType={filterType} setFilterType={setFilterType} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
        editDueDate={editDueDate}
        filterType={filterType}
      />
    </div>
  );
}

export default App;
