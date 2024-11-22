import { sleep } from "@/lib/utils";
import React from "react";
import ClientComponentTest from "./components/ClientComponentTest";
import { getTodoAction } from "@/actions/todo/ping.action";

const page = async () => {
  console.log(">> SSR start");
  const result = await getTodoAction();

  // await sleep(1500);
  console.log(">> SSR End");
  return (
    <div>
      Page {JSON.stringify(result)}
      <ClientComponentTest />
    </div>
  );
};

export default page;
