"use client";
// 위의 use client를 안쓰면 해당 api 는 server의 api 로 판단 하므로 client로 판단하길 원한다면 적어놔야 함

import { createSupabaseBrowerClient } from "@/lib/client/supabase";
import { TbRulerMeasure } from "react-icons/tb";

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

// todoList 가져오기 + by Id
export const getTodosById = async (id: number) => {
  const supabase = createSupabaseBrowerClient();
  const result = await supabase
    .from("todos_no_rls")
    .select("*")
    .is("deleted_at", null)
    .eq("id", id);
  return result.data;
};

// todoList 가져오기 + search
export const getTodosbySearch = async (terms: string) => {
  const supabase = createSupabaseBrowerClient();
  const result = await supabase
    .from("todos_no_rls")
    .select("*")
    .is("deleted_at", null)
    .ilike("content", `%${terms}%`)
    .order("id", { ascending: false })
    .limit(500);
  return result.data;
};
