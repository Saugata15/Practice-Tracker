import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import MyStore from "../context/MyStore";
import { nanoid } from "nanoid";

const useReactForm = () => {
  const {
    questions,
    setQuestions,
    setShowForm,
    editId,
    setEditId,
  } = useContext(MyStore);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    setQuestions((prev) => {
      if (editId) {
        return prev.map((item) =>
          item.id === editId ? { ...item, ...data } : item,
        );
      } else return [...prev, { ...data, id: nanoid() }];
    });
    setEditId(null);
    reset();
    setShowForm(false);
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
