"use server";

import { createServerSideClientRSC } from "@/lib/supabase";

export const getTodoAction = async () => {
  const supabase = await createServerSideClientRSC();
  const result = await supabase
    .from("todos_no_rls")
    .select("*")
    .is("deleted_at", null)
    .order("id", { ascending: false });

  return result.data;
};
