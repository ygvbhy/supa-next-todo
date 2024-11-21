"use client";
import React, { useEffect } from "react";
import useTodosController from "../hooks/useTodosController";

const TodoContainer = () => {
  const { loading, todos } = useTodosController();
  return <div>TodoContainer</div>;
};

export default TodoContainer;
