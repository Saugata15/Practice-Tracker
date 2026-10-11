import React from "react";

const Progress = ({ totalQuestions }) => {
  const completedQuestions = totalQuestions.filter(
    (question) => question.status === "Completed",
  );

  const progress = Math.ceil(
    (completedQuestions.length / totalQuestions.length) * 100,
  );

  return (
    <div className="w-full flex justify-between items-center rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div>
        <h3>Track your progress</h3>
      </div>

      <div className="flex items-center gap-2">
        <div className="h-2 w-40 overflow-hidden rounded-full bg-gray-200">
          <div
            style={{width: `${progress}%`}}
            className={`h-full rounded-full ${progress >= 25 && progress < 50 ? "bg-amber-400" : progress >= 50 && progress < 75 ? "bg-blue-500" : progress >= 75 ? "bg-green-500" : "bg-red-500"}`}
          ></div>
        </div>
        <p
          className={`font-bold ${progress >= 25 && progress < 50 ? "text-amber-400" : progress >= 50 && progress < 75 ? "text-blue-500" : progress >= 75 ? "text-green-500" : "text-red-500"}`}
        >
          {progress}%
        </p>
      </div>
    </div>
  );
};

export default Progress;
