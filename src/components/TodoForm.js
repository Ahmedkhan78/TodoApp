import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
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
      className="bg-white dark:bg-dark-green p-6 rounded-lg shadow-md max-w-md ml-5"
    >
      <h2 className="text-2xl text-center text-warm-brown mb-6 font-semibold">
        Add Todo
      </h2>

      <input
        type="text"
        placeholder="Add a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="w-full p-4 mb-4 border border-olive-green rounded-md focus:outline-none focus:ring-2 focus:ring-warm-brown"
      />

      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full sm:w-48 p-3 border border-olive-green rounded-md focus:outline-none focus:ring-2 focus:ring-warm-brown"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full sm:w-48 p-3 border border-olive-green rounded-md focus:outline-none focus:ring-2 focus:ring-warm-brown"
        >
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
        </select>
      </div>

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="w-full p-3 mb-4 border border-olive-green rounded-md focus:outline-none focus:ring-2 focus:ring-warm-brown"
      />

      <button
        type="submit"
        className="w-full py-3 text-white bg-warm-brown rounded-md hover:bg-olive-green focus:outline-none focus:ring-2 focus:ring-warm-brown"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
