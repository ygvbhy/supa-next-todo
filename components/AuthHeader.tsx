"use client";
import React from "react";
import { User } from "@supabase/supabase-js";
import { createSupabaseBrowserClient } from "@/lib/client/supabase";
import { useRouter } from "next/navigation";
import { FcTodoList } from "react-icons/fc";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineLogout } from "react-icons/ai";

interface AuthHeaderProps {
  user?: User | null;
}

const AuthHeader = ({ user }: AuthHeaderProps) => {
  const isLoggedIn = !!user?.email;
  const supabase = createSupabaseBrowserClient();
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO,
      },
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <header className="h-[50px] bg-white">
      <section className="px-6 h-full">
        <div className="h-full flex flex-row justify-between items-center">
          <div
            className="flex flex-row items-center cursor-pointer gap-2"
            onClick={goToHome}
          >
            TODO <FcTodoList size={30} />
          </div>
          {isLoggedIn ? (
            <div
              className="flex flex-row items-center gap-2 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
              <AiOutlineLogout size={30} />
            </div>
          ) : (
            <div
              className="flex flex-row items-center gap-2 cursor-pointer"
              onClick={handleGoogleLogin}
            >
              Login
              <FcGoogle size={30} />
            </div>
          )}
        </div>
      </section>
    </header>
  );
};

export default AuthHeader;
