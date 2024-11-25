import { sleep } from "@/lib/utils";
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
  const userId = params?.user_id
  return (
    <div>
      {/* <TodoContainer /> */}
      Share
    </div>
  );
};

export default page;
