"use client";
// 위의 use client를 안쓰면 해당 api 는 server의 api 로 판단 하므로 client로 판단하길 원한다면 적어놔야 함

import { createSupabaseBrowerClient } from "@/lib/client/supabase";

// todoList 가져오기
export const getTodos = async () => {
  const supabase = createSupabaseBrowerClient();
  const result = await supabase
    .from("todos_no_rls")
    .select("*")
    .is("deleted_at", null)
    .order("id", { ascending: false }); // 내림차순 정렬 6,5,4 ...
  return result.data;
};
