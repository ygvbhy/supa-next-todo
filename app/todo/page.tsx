import { sleep } from "@/lib/utils";
import React from "react";

const page = async () => {
  console.log(">> SSR start");
  await sleep(1500);
  console.log(">> SSR End");
  return <div>Page</div>;
};

export default page;
