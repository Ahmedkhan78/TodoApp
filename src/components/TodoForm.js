import React, { useState } from "react";

const TodoForm = ({ addTodo, isDarkMode }) => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Work");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo({
        id: Date.now(),
        task,
        priority,
        category,
        dueDate,
        completed: false,
      });
      setTask("");
      setPriority("Medium");
      setCategory("Work");
      setDueDate("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${
        isDarkMode ? "bg-warm-brown" : "bg-dark-green"
      } p-6 rounded-lg shadow-md max-w-md ml-5`}
    >
      <h2
        className={`text-2xl text-center  mb-6 font-semibold ${
          isDarkMode ? "text-olive-green" : "text-light-beige"
        }`}
      >
        Todo
      </h2>

      <input
        type="text"
        placeholder="Add a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className={`w-full p-4 mb-4  rounded-md focus:outline-none focus:ring-2 ${
          isDarkMode
            ? "border border-olive-green focus:ring-warm-brown text-olive-green"
            : "border border-warm-brown focus:ring-dark-green text-warm-brown "
        }`}
      />

      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className={`w-full sm:w-48 p-3  rounded-md focus:outline-none focus:ring-2 ${
            isDarkMode
              ? "border border-olive-green focus:ring-warm-brown text-olive-green"
              : "border border-warm-brown focus:ring-dark-green text-warm-brown "
          }`}
        >
          <option
            value="Low"
            className={`${
              isDarkMode
                ? "bg-olive-green text-warm-brown"
                : "bg-warm-brown text-olive-green"
            }`}
          >
            Low
          </option>
          <option
            value="Medium"
            className={`${
              isDarkMode
                ? "bg-olive-green text-warm-brown"
                : "bg-warm-brown text-olive-green"
            }`}
          >
            Medium
          </option>
          <option
            value="High"
            className={`${
              isDarkMode
                ? "bg-olive-green text-warm-brown"
                : "bg-warm-brown text-olive-green"
            }`}
          >
            High
          </option>
        </select>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={`w-full sm:w-48 p-3  rounded-md focus:outline-none focus:ring-2 ${
            isDarkMode
              ? "border border-olive-green focus:ring-warm-brown text-olive-green"
              : "border border-warm-brown focus:ring-dark-green text-warm-brown "
          }`}
        >
          <option
            value="Personal"
            className={`${
              isDarkMode
                ? "bg-olive-green text-warm-brown"
                : "bg-warm-brown text-olive-green"
            }`}
          >
            Personal
          </option>
          <option
            value="Work"
            className={`${
              isDarkMode
                ? "bg-olive-green text-warm-brown"
                : "bg-warm-brown text-olive-green"
            }`}
          >
            Work
          </option>
        </select>
      </div>

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className={`w-full p-4 mb-4  rounded-md focus:outline-none focus:ring-2 ${
          isDarkMode
            ? "border border-olive-green focus:ring-warm-brown text-olive-green"
            : "border border-warm-brown focus:ring-dark-green text-warm-brown "
        }`}
      />

      <button
        type="submit"
        className={`w-full py-3 rounded-md focus:outline-none focus:ring-2 font-semibold ${
          isDarkMode
            ? "bg-olive-green hover:bg-light-beige hover:text-warm-brown focus:ring-warm-brown"
            : "bg-warm-brown hover:bg-olive-green hover:text-light-beige text-white focus:ring-olive-green"
        }`}
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
