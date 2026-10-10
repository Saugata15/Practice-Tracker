import QuestionList from "./QuestionList";

const Dashboard = ({ setShowForm, questions }) => {
  return (
    <div className="pb-10">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-5">
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
      <QuestionList questions={questions} />
    </div>
  );
};

export default Dashboard;
