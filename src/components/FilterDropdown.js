import React from "react";

const FilterDropDown = ({
  filterType = "All",
  setFilterType,
  sortBy = "",
  setSortBy,
}) => {
  return (
    <div className="flex justify-center gap-4 sm:gap-6 w-full">
      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        className="p-2 mb-2 rounded-md bg-light-beige border border-olive-green focus:outline-none focus:ring-2 focus:ring-olive-green focus:border-transparent text-dark-green"
      >
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
        <option value="High Priority">High Priority</option>
      </select>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="p-2 mb-2 rounded-md bg-light-beige border border-olive-green focus:outline-none focus:ring-2 focus:ring-olive-green focus:border-transparent text-dark-green"
      >
        <option value="">Sort By</option>
        <option value="priority">Priority</option>
        <option value="dueDate">Due Date</option>
      </select>
    </div>
  );
};

export default FilterDropDown;
