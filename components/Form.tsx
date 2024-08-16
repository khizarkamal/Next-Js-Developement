import React from "react";
import { createUserAction } from "@/utils/actions";

// const createUser = async () => {
//   "use server";
//   console.log("Server Action");
// };

const Form = () => {
  return (
    <form action={createUserAction} className={formStyle}>
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
      <button className={btnStyle} type="submit">
        Submit
      </button>
    </form>
  );
};

const formStyle = "max-w-lg flex flex-col gap-y-4  shadow rounded p-8";
const inputStyle = "border shadow rounded py-2 px-3 text-gray-700";
const btnStyle =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize";

export default Form;
