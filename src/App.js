import React, { useEffect, useState } from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterDropdown from "./components/FilterDropdown";
import useDarkMode from "./hooks/useDarkMode";
import "./index.css";
import {
  saveToLocalStorage,
  loadFromLocalStorage,
  sortTodos,
} from "./utils/helperFunction";

function App() {
  const [todos, setTodos] = useState(() => loadFromLocalStorage() || []);
  const [filterType, setFilterType] = useState("All");
  const [sortBy, setSortBy] = useState("");
  const [isDarkMode, toggleMode] = useDarkMode();

  useEffect(() => {
    setTodos(loadFromLocalStorage());
  }, []);

  // SortBY Effect
  useEffect(() => {
    if (sortBy) {
      const sortedTodos = sortTodos(todos, sortBy);
      setTodos(sortedTodos);
      saveToLocalStorage(sortedTodos);
    }
  }, [sortBy, todos]);

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
      <h1 className="text-green-700 text-xl">Todo App</h1>
      <button onClick={toggleMode} className="text-green-700">
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <TodoForm addTodo={addTodo} />
      <FilterDropdown
        filterType={filterType}
        setFilterType={setFilterType}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
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
