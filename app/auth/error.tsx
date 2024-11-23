"use client";
import React from "react";
import { BounceLoader } from "react-spinners";

const Error = () => {
  return (
    <div className="flex flex-col items-center mt-12">
      <div>
        <BounceLoader />
      </div>
      <div className="font-bold my-2">Threr is something wrong...</div>
    </div>
  );
};

export default Error;
