"use client";
import React from "react";
import useTodosController from "../hooks/useTodosController";
import TodoList from "@/components/ui/TodoList";

interface TodoContainerProps {
  ownerUserId: string;
  sharedUserFullName?: string;
}

const TodoContainer = ({
  ownerUserId,
  sharedUserFullName,
}: TodoContainerProps) => {
  const {
    loading,
    todos,
    onDeleteTodo,
    onUpdateTodos,
    onSearchTodos,
    onCreateEmptyTodos,
  } = useTodosController(ownerUserId);

  return (
    <div>
      <TodoList
        sharedUserFullName={sharedUserFullName}
        ownerUserId={ownerUserId}
        loading={loading}
        todoListData={todos}
        isReadOnly
        onUpdate={onUpdateTodos}
        onCreate={onCreateEmptyTodos}
        onDelete={onDeleteTodo}
        onSearch={onSearchTodos}
      />
    </div>
  );
};

export default TodoContainer;
