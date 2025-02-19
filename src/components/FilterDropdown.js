import React from "react";

const FilterDropDown = ({ filterType, setFilterType }) => {
  return (
    <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
      <option value="All">All</option>
      <option value="Completed">Completed</option>
      <option value="Pending">Pending</option>
      <option value="High Priority">High Priority</option>
    </select>
  );
};

export default FilterDropDown;
