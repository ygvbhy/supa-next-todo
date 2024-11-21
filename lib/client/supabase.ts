import { createBrowserClient } from "@supabase/ssr";
import { Database } from "@/types/database.types";

export const createSupabaseBrowerClient = () =>
  createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_KEY!
  );
