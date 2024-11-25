"use client";
import React from "react";
import useTodosController from "../hooks/useTodosController";
import TodoList from "@/components/ui/TodoList";

const TodoContainer = () => {
  const {
    loading,
    todos,
    onDeleteTodo,
    onUpdateTodos,
    onSearchTodos,
    onCreateEmptyTodos,
  } = useTodosController();

  return (
    <div>
      <TodoList
        sharedUserFullName="test user"
        ownerUserId="123123"
        loading={loading}
        todoListData={todos}
        isReadOnly={true}
        onUpdate={onUpdateTodos}
        onCreate={onCreateEmptyTodos}
        onDelete={onDeleteTodo}
        onSearch={onSearchTodos}
      />
    </div>
  );
};

export default TodoContainer;
