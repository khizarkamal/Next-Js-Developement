"use client";

import React from "react";
import { createUserAction } from "@/utils/actions";
import { useFormState, useFormStatus } from "react-dom";

// In Order to add interactivity such as loading sign when for is submitting or
// success or error state we have to convert it into client component

// const createUser = async () => {
//   "use server";
//   console.log("Server Action");
// };

// useFormStatus provide the status information last form submission
// An important point to remember is that it should be presnet inside a component that is
// inside a form

const Button = () => {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className={btnStyle} type="submit">
      {pending ? "Submitting..." : "Create User"}
    </button>
  );
};

const Form = () => {
  const [message, formAction] = useFormState(createUserAction, null);
  return (
    <form action={formAction} className={formStyle}>
      <h1 className=" capitalize text-3xl mb-4">create user</h1>
      <input
        className={inputStyle}
        type="text"
        name="firstName"
        required
        defaultValue={"John"}
      />
      <input
        className={inputStyle}
        type="text"
        name="lastName"
        required
        defaultValue={"Doe"}
      />
      <Button />
      {message && <p>{message}</p>}
    </form>
  );
};

const formStyle = "max-w-lg flex flex-col gap-y-4  shadow rounded p-8";
const inputStyle = "border shadow rounded py-2 px-3 text-gray-700";
const btnStyle =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize";

export default Form;
