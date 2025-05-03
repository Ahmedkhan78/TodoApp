import React, { useState } from "react";
import TodoItem from "./TodoItem";
import {
  DndContext,
  useSensor,
  useSensors,
  PointerSensor,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
const TodoList = ({
  todos = [],
  setTodos,
  deleteTodo,
  toggleTodo,
  editTodo,
  editDueDate,
  filterType,
  isDarkMode,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const sensors = useSensors(useSensor(PointerSensor));

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

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = todos.findIndex((todo) => todo.id === active.id);
    const newIndex = todos.findIndex((todo) => todo.id === over.id);

    if (oldIndex !== -1 && newIndex !== -1) {
      setTodos((prevTodos) => arrayMove(prevTodos, oldIndex, newIndex));
    }
  };
  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <SortableContext
        items={searchTodos}
        strategy={verticalListSortingStrategy}
      >
        {/* search Box */}
        <input
          type="text"
          placeholder="Search Tasks"
          className="w-full px-4 py-2 rounded-md bg-light-beige border border-olive-green focus:outline-none focus:ring-2 focus:ring-olive-green focus:border-transparent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <ul className="space-y-4 sm:space-y-6">
          {" "}
          {searchTodos.length === 0 ? (
            <p className="text-center text-dark-green">No tasks found!</p>
          ) : null}
          {searchTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
              editDueDate={editDueDate}
              isDarkMode={isDarkMode}
              draggable
            />
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
};

export default TodoList;
