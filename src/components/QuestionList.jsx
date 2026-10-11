import { useContext } from "react";
import MyStore from "../context/MyStore";

const QuestionList = ({ filteredQuestions }) => {
  const { questions, setQuestions, setEditId, setShowForm } = useContext(MyStore);
  const onDeleteQuestion = (id) => {
    setQuestions((prev) => prev.filter((item) => item.id !== id));
  };

  const onUpdateQuestion = (id) => {
    setEditId(id);
    setShowForm(true);
  };

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-2 border-b border-slate-100 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div className="max-sm:text-center">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Your Questions
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Review and manage your interview preparation.
            </p>
          </div>

          <div className="rounded-xl border border-gray-300 px-4 py-2 flex items-center justify-center gap-3">
            <p className="text-[14px] text-slate-400">Total Questions</p>
            <p className="text-lg font-bold text-amber-400">
              {filteredQuestions.length}
            </p>
          </div>
        </div>
      </div>

      {filteredQuestions.length === 0 ? (
        <div className="flex justify-center items-center w-full min-h-40">
          <p className="text-gray-500">
            {questions.length === 0
              ? "No questions added yet."
              : "No matching questions found."}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredQuestions.map((question) => (
            <div
              key={question.id}
              className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-semibold text-gray-800">
                  {question.title}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {question.category} · {question.difficulty} · {question.status}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => onUpdateQuestion(question.id)}
                  className="rounded-md bg-blue-50 px-3 py-2 text-sm text-blue-600 hover:bg-blue-100 cursor-pointer"
                >
                  Update
                </button>

                <button
                  type="button"
                  onClick={() => onDeleteQuestion(question.id)}
                  className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600 hover:bg-red-100 cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default QuestionList;
