import React from "react";

const FilterDropDown = ({
  filterType = "All",
  setFilterType,
  sortBy = "",
  setSortBy,
  isDarkMode,
}) => {
  const selectBaseClasses =
    "p-2 mb-2 rounded-md border focus:outline-none focus:ring-2 focus:border-transparent";

  const lightModeClasses =
    "bg-light-beige border-olive-green focus:ring-olive-green text-dark-green";
  const darkModeClasses =
    "bg-dark-green border-gray-600 focus:ring-warm-brown text-light-beige";

  const selectClass = `${selectBaseClasses} ${
    isDarkMode ? darkModeClasses : lightModeClasses
  }`;

  // Inline style for <option>
  const optionStyle = {
    backgroundColor: isDarkMode ? "#3F4F44" : "#A27B5C", // olive-green / warm-brown
    color: isDarkMode ? "#A27B5C" : "#3F4F44", // warm-brown / olive-green
  };

  return (
    <div className="flex justify-center gap-4 sm:gap-6 w-full">
      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        className={selectClass}
      >
        <option style={optionStyle} value="All">
          All
        </option>
        <option style={optionStyle} value="Completed">
          Completed
        </option>
        <option style={optionStyle} value="Pending">
          Pending
        </option>
        <option style={optionStyle} value="High Priority">
          High Priority
        </option>
      </select>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className={selectClass}
      >
        <option style={optionStyle} value="">
          Sort By
        </option>
        <option style={optionStyle} value="priority">
          Priority
        </option>
        <option style={optionStyle} value="dueDate">
          Due Date
        </option>
      </select>
    </div>
  );
};

export default FilterDropDown;
