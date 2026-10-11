import { useContext } from "react";
import QuestionList from "./QuestionList";
import SearchFilter from "./SearchFilter";
import MyStore from "../context/MyStore";
import Progress from "./Progress";

const Dashboard = () => {
  const {
    searchTerm,
    setSearchTerm,
    filters,
    questions,
    setShowForm,
    setFilters,
  } = useContext(MyStore);

  const filteredQuestions = questions.filter((question) => {
    const matchesSearch = question.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      filters.category === "All" || question.category === filters.category;

    const matchesDifficulty =
      filters.difficulty === "All" ||
      question.difficulty === filters.difficulty;

    const matchesStatus =
      filters.status === "All" || question.status === filters.status;

    return (
      matchesSearch && matchesCategory && matchesDifficulty && matchesStatus
    );
  });

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-3 gap-5">
        <h1 className="text-3xl md:text-4xl max-md:text-center font-bold text-gray-900">
          Interview Practice Questions
        </h1>

        <button
          className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-4 py-3 rounded-lg transition-colors cursor-pointer"
          onClick={() => setShowForm(true)}
        >
          + Add Question
        </button>
      </div>
      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filters={filters}
        setFilters={setFilters}
      />
      <QuestionList filteredQuestions={filteredQuestions} />
      <Progress totalQuestions={filteredQuestions}/>
    </div>
  );
};

export default Dashboard;
