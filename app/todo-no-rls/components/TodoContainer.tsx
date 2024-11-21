"use client";
import { updateTodos } from "@/apis/todos-no-rls";
import React, { useEffect } from "react";

const TodoContainer = () => {
  useEffect(() => {
    updateTodos(8, "TodoUpdate 함");
  }, []);
  return <div>TodoContainer</div>;
};

export default TodoContainer;
