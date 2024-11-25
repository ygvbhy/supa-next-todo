"use server";

import { createServerSideClient } from "@/lib/supabase";

export const getTodos = async () => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    .select("*")
    .is("deleted_at", null)
    .order("id", { ascending: false }); // 내림차순 정렬 6,5,4 ...
  return result.data;
};

// todoList 가져오기 + by Id
export const getTodosById = async (id: number) => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    .select("*")
    .is("deleted_at", null)
    .eq("id", id);

  return result.data;
};

// todoList 가져오기 + by userId
export const getTodosByUserId = async (userId: string) => {
  const supabase = await createServerSideClient(true);
  const result = await supabase
    .from("todos_with_rls")
    .select("*")
    .is("deleted_at", null)
    .eq("user_id", userId);

  return result.data;
};

// todoList 가져오기 + search
export const getTodosBySearch = async (terms: string) => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    .select("*")
    .is("deleted_at", null)
    .ilike("content", `%${terms}%`)
    .order("id", { ascending: false })
    .limit(500);

  return result.data;
};

// todoList 생성하기
export const createTodos = async (content: string) => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    .insert({
      content,
    })
    .select();

  return result.data;
};

// todoList 업데이트
export const updateTodos = async (id: number, content: string) => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    .update({
      content,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select();

  return result.data;
};

// todoList softDelete
export const deleteTodosSoft = async (id: number) => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    .update({
      deleted_at: new Date().toISOString(),
      updated_at: new Date().toISOString(), // 사용자의 요구에 맞게 추가 해도 되고 안해도 됨.
    })
    .eq("id", id)
    .select();

  return result.data;
};

// todoList hardDelete
// DB의 행을 지워버리는 것이므로 실 사용에선 잘 사용하지 않음.
// 그래서 deleted_at 이란 요소를 만들어서 삭제 됐다는 조건을 넣어주는게 맞음 그래야 복구하기도 편할 거고
// export const deleteTodosHard = async (id: number) => {
//   const supabase = await createServerSideClient();
//   const result = await supabase.from("todos_with_rls").delete().eq("id", id);

//   return result.data;
// };
