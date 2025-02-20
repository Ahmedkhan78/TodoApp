import React from "react";

const FilterDropDown = ({
  filterType = "All",
  setFilterType,
  sortBy = "",
  setSortBy,
}) => {
  return (
    <div>
      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
        <option value="High Priority">High Priority</option>
      </select>

      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Sort By</option>
        <option value="priority">Priority</option>
        <option value="dueDate">Due Date</option>
      </select>
    </div>
  );
};

export default FilterDropDown;
