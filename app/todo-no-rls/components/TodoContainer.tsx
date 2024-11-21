"use client";
import { getTodosbySearch } from "@/apis/todos-no-rls";
import React, { useEffect } from "react";

const TodoContainer = () => {
  useEffect(() => {
    getTodosbySearch("next");
  }, []);
  return <div>TodoContainer</div>;
};

export default TodoContainer;
