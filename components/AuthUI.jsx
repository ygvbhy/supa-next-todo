"use client";
import React, { useEffect, useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createSupabaseBrowserClient } from "@/lib/client/supabase";
import useHydrate from "@/hooks/useHydrate";

const AuthUI = () => {
  const isMounted = useHydrate();
  const supabase = createSupabaseBrowserClient();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) setUser(data?.user);
    };

    getUserInfo();
  }, [supabase.auth]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
    setUser(null);
  };

  if (!isMounted) return null;

  return (
    <section className="w-full p-10">
      <div>{user ? `로그인 됨 ${user.email}` : "로그인 안됨"}</div>
      <>
        {user && (
          <button onClick={handleLogout} className=" border-2 border-black">
            로그아웃
          </button>
        )}
      </>
      <div className="max-w-[500px] mx-auto">
        <Auth
          redirectTo={process.env.NEXT_PUBLIC_AUTH_REDIRECT_URL}
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          onlyThirdPartyProviders={true}
          providers={["google", "github"]}
        />
      </div>
    </section>
  );
};

export default AuthUI;
