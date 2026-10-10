import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import MyStore from "../context/MyStore";
import { nanoid } from "nanoid";

const useReactForm = () => {
  const { questions, setQuestions } = useContext(MyStore);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    const newQuestion = {
      id: nanoid(),
      title: data.title,
      difficulty: data.difficulty,
      category: data.category,
      status: "Pending",
    };

    setQuestions((prev) => [...prev, newQuestion]);
    reset();
  };

  return {
    register,
    reset,
    handleSubmit,
    errors,
    questions,
    setQuestions,
    formSubmit,
  };
};

export default useReactForm;
