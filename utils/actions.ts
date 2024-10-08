// Always add 'use server'  for actions files as the first statement
"use server";
import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type User = {
  id: string;
  firstName: string;
  lastName: string;
};

export const createUserAction = async (prevState: any, formData: FormData) => {
  // Type assertion manually other wise it can be null
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const newUser: User = { firstName, lastName, id: Date.now().toString() };
  try {
    await saveUser(newUser);
    revalidatePath("/actions");
    return "User Created Successfully";
  } catch (error) {
    console.log("Error--", error);
    return "Something went wrong";
  }

  //   console.log("Create User action from utils/actions");
  //   console.log("First Name ", firstName);
  //   console.log("Last Name ", lastName);
  //    Another Approach is
  //   const rawData = Object.fromEntries(formData);
  //   console.log("Raw Data--", rawData);

  // Revalidating Path to show the latest data
  // revalidatePath("/action");
  // OR we can use redirct
  // redirect("/");
  // One Thing to keep in mind in not to place redirect in try catch block
  // the reason to not include is that it will also trigger the catch block
};

export const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  writeFile("users.json", JSON.stringify(users));
};

export const fetchUsers = async (): Promise<User[]> => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const result = await readFile("users.json", { encoding: "utf-8" });
  const users = result ? JSON.parse(result) : [];
  return users;
};

export const deleteUserAction = async (formData: FormData) => {
  const id = formData.get("id") as string;
  const users = await fetchUsers();
  const updatedUsers = users.filter((user) => user.id !== id);
  writeFile("users.json", JSON.stringify(updatedUsers));
  revalidatePath("/actions");
};
