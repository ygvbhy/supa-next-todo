import {
  createTodos,
  deleteTodosSoft,
  getTodosByUserId,
  getTodosBySearch,
  updateTodos,
} from "@/actions/todo/todo.action";
import { Database } from "@/types/database.types";
import { useState, useEffect, useCallback } from "react";

type TodoDto = Database["public"]["Tables"]["todos_with_rls"]["Row"];

const useTodosController = (ownerUserId = "") => {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState<TodoDto[]>([]);

  const onGetTodos = useCallback(async () => {
    setLoading(true);
    try {
      const resultTodos = await getTodosByUserId(ownerUserId);
      if (resultTodos) setTodos(resultTodos);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [ownerUserId]);

  useEffect(() => {
    onGetTodos();
  }, [onGetTodos]);

  // 비어있는 todo 생성
  const onCreateEmptyTodos = async () => {
    await createTodos("");
    await onGetTodos();
  };

  // todo 업데이트
  const onUpdateTodos = async (id: number, content: string) => {
    await updateTodos(id, content);
    await onGetTodos();
  };

  // todo 삭제
  const onDeleteTodo = async (id: number) => {
    await deleteTodosSoft(id);
    await onGetTodos();
  };

  // todo 검색
  const onSearchTodos = async (terms: string) => {
    if (terms) {
      const todoResult = await getTodosBySearch(terms);
      if (todoResult) setTodos(todoResult);
    } else await onGetTodos();
  };

  return {
    loading,
    todos,
    onCreateEmptyTodos,
    onUpdateTodos,
    onDeleteTodo,
    onSearchTodos,
  };
};

export default useTodosController;
