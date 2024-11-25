import { getProfileById } from "@/actions/auth/user.action";
import { sleep } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";
import React from "react";
// import TodoContainer from "./components/TodoContainer";

interface SharePageProps {
  params: {
    user_id: string;
  };
  searchParams: {};
}

const page = async ({ params }: SharePageProps) => {
  await sleep(1500);
  const userId = params?.user_id;
  const profile = await getProfileById({ serverComponent: true, userId });

  if (!profile) permanentRedirect("/");

  return (
    <div>
      {userId}
      Share
    </div>
  );
};

export default page;
