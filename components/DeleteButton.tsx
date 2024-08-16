import React from "react";
import { deleteUserAction } from "@/utils/actions";

const DeleteButton = ({ id }: { id: string }) => {
  return (
    <form action={deleteUserAction}>
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className=" text-white bg-red-500 text-sm p-2 capitalize rounded mb-4"
      >
        delete
      </button>
    </form>
  );
};

export default DeleteButton;
