import React, { useEffect, useState } from "react";
import MyStore from "./MyStore";

const ContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState(
    JSON.parse(localStorage.getItem("questions")) || [],
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: "All",
    difficulty: "All",
    status: "All",
  });

  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(questions));
  }, [questions]);

  return (
    <MyStore.Provider
      value={{
        questions,
        setQuestions,
        searchTerm,
        setSearchTerm,
        filters,
        setFilters,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};

export default ContextProvider;
