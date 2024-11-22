import { pingAction } from "@/actions/ping/ping.action";
import { sleep } from "@/lib/utils";
import React from "react";
import ClientComponentTest from "./components/ClientComponentTest";

const page = async () => {
  console.log(">> SSR start");
  const result = await pingAction();

  // await sleep(1500);
  console.log(">> SSR End");
  return (
    <div>
      Page {result}
      <ClientComponentTest />
    </div>
  );
};

export default page;
