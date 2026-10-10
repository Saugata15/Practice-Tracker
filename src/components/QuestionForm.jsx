import React, { useContext, useEffect } from "react";
import useReactForm from "../hooks/useReactForm";
import { categories, difficulties, statuses } from "../utils/utils";
import { Plus } from "lucide-react";
import MyStore from "../context/MyStore";

const QuestionForm = () => {
  const { register, handleSubmit, reset, errors, formSubmit } = useReactForm();
  const { setShowForm, editId, questions } = useContext(MyStore);

  useEffect(() => {
    if (editId) {
      const editItem = questions.find((question) => question.id === editId);
      reset({
        title: editItem.title,
        category: editItem.category,
        difficulty: editItem.difficulty,
        status: editItem.status,
      });
    }
  }, [editId, questions, reset]);

  return (
    <div
      className="w-full bg-white flex justify-center items-center p-5"
      onClick={() => {
        setShowForm(false);
      }}
    >
      <div
        className="w-full max-w-xl border border-gray-300 rounded-lg p-5 md:p-10 shadow"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold text-black sm:text-3xl lg:text-4xl pb-6">
          Add New Question
        </h2>
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="w-full flex flex-col gap-4"
        >
          <div>
            <label htmlFor="title" className="mb-1.5 block text-sm font-medium">
              Question title
            </label>
            <input
              {...register("title", {
                required: "Question title is required",
                minLength: {
                  value: 10,
                  message: "Minimum 10 charectors",
                },
              })}
              type="text"
              id="title"
              placeholder="e.g. Explain event delegation"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-blue-500"
            />

            {errors.title && (
              <p className="mt-2 text-sm text-red-600">
                {errors.title.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="category"
              className="mb-1.5 block text-sm font-medium"
            >
              Category
            </label>

            <select
              {...register("category", {
                required: "Please select a category",
              })}
              id="category"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:border-blue-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {errors.category && (
              <p className="mt-2 text-sm text-red-600">
                {errors.category.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="difficulty"
              className="mb-1.5 block text-sm font-medium"
            >
              Difficulty
            </label>

            <select
              {...register("difficulty", {
                required: "Please select a difficulty",
              })}
              id="difficulty"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:border-blue-500"
            >
              {difficulties.map((difficulty) => (
                <option key={difficulty} value={difficulty}>
                  {difficulty}
                </option>
              ))}
            </select>

            {errors.difficulty && (
              <p className="mt-2 text-sm text-red-600">
                {errors.difficulty.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="difficulty"
              className="mb-1.5 block text-sm font-medium"
            >
              Difficulty
            </label>

            <select
              {...register("status", {
                required: "Please select a difficulty",
              })}
              id="status"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:border-blue-500"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>

            {errors.status && (
              <p className="mt-2 text-sm text-red-600">
                {errors.status.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white border-none rounded-lg px-3 py-3 mt-2 flex items-center justify-center cursor-pointer"
          >
            <Plus size={18} />
            <span>Add Question</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuestionForm;
