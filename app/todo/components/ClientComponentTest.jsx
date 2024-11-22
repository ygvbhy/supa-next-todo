"use client";
import { getTodoAction } from "@/actions/todo/ping.action";
import React from "react";

const ClientComponentTest = () => {
  const handleClick = async () => {
    const result = await getTodoAction();
    return result;
  };

  return (
    <div>
      ClientComponentTest
      <button onClick={handleClick}>Test server Action</button>
    </div>
  );
};

export default ClientComponentTest;
