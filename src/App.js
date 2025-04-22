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
    <div
      className={`min-h-screen py-6 px-4 sm:px-8 ${
        isDarkMode
          ? "bg-dark-green text-white"
          : "bg-light-beige text-dark-green"
      } transition-all duration-300 ease-in-out`}
    >
      <h1 className="text-warm-brown text-3xl sm:text-4xl font-semibold text-center mb-4">
        Todo App
      </h1>
      <button
        onClick={toggleMode}
        className="bg-warm-brown hover:bg-olive-green text-white py-2 px-4 rounded-full focus:outline-none focus:ring-warm-brown mb-4 block mx-auto"
      >
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <div className="flex flex-col sm:flex-row gap-y-6 sm:gap-y-0 sm:gap-x-12">
        <div className="space-y-2 sm:space-y-8 w-full sm:w-1/2 sm:ml-0 sm:mr-0  sm:p-6">
          <TodoForm addTodo={addTodo} isDarkMode={isDarkMode} />
        </div>
        <div className="space-y-3 my-5 w-full sm:w-1/2 ">
          <FilterDropdown
            filterType={filterType}
            setFilterType={setFilterType}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            editDueDate={editDueDate}
            filterType={filterType}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
