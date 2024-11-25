// import { getTodoAction } from "@/actions/todo/ping.action";
import { createServerSideClient } from "@/lib/supabase";
import { NextResponse } from "next/server";

export const GET = async () => {
  const supabase = await createServerSideClient();

  // const result = await getTodoAction();

  // return NextResponse.json({ ...result });
};
