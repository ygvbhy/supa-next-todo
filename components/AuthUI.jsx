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

  // 기존의 로그인 방식이 UI 가 맘에 안든다고 한다면 해당 함수를 만들어서 버튼을 커스텀 한 뒤
  // 함수를 onClick 로 연결 하여 사용 할 수 있다.
  // 구글 로그인
  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO,
      },
    });
  };

  // 깃허브 로그인
  const handleGithubLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO,
      },
    });
  };

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
          redirectTo={process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO}
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
