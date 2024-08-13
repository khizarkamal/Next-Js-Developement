"use client";
import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="flex flex-col items-center w-[100px]">
      <p className="text-5xl font-bold">{counter}</p>
      <button
        className="bg-blue-500 rounded-md text-white px-4 py-2 mt-2"
        onClick={() => setCounter(counter + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
