import {
  createTodos,
  deleteTodosSoft,
  getTodos,
  getTodosbySearch,
  updateTodos,
} from "@/apis/todos-no-rls";
import { Database } from "@/types/database.types";
import { useState, useEffect } from "react";

type TodoDto = Database["public"]["Tables"]["todos_no_rls"]["Row"];

const useTodosController = () => {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState<TodoDto[]>([]);

  const onGetTodos = async () => {
    setLoading(true);
    try {
      const resultTodos = await getTodos();
      if (resultTodos) setTodos(resultTodos);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    onGetTodos();
  }, []);

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
      const todoResult = await getTodosbySearch(terms);
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
