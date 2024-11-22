"use client";
import { pingAction } from "@/actions/ping/ping.action";
import React from "react";

const ClientComponentTest = () => {
  const handleClick = async () => {
    const result = await pingAction();
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
