import React from "react";
import {
  categoryFilters,
  difficultFilters,
  statusFilters,
} from "../utils/utils";

const SearchFilter = ({ searchTerm, setSearchTerm, filters, setFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Search */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search questions..."
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />

        {/* Category */}
        <select
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
        >
          {categoryFilters.map((category) => (
            <option key={category} value={category}>
              {category === "All" ? "All Categories" : category}
            </option>
          ))}
        </select>

        {/* Difficulty */}
        <select
          name="difficulty"
          value={filters.difficulty}
          onChange={handleFilterChange}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
        >
          {difficultFilters.map((difficulty) => (
            <option key={difficulty} value={difficulty}>
              {difficulty === "All" ? "All Difficulties" : difficulty}
            </option>
          ))}
        </select>

        {/* Status */}
        <select
          name="status"
          value={filters.status}
          onChange={handleFilterChange}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
        >
          {statusFilters.map((status) => (
            <option key={status} value={status}>
              {status === "All" ? "All Statuses" : status}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;
