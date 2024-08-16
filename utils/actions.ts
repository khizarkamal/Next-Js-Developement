// Always add 'use server'  for actions files as the first statement
"use server";
import { readFile, writeFile } from "fs/promises";

type User = {
  id: string;
  firstName: string;
  lastName: string;
};

export const createUserAction = async (formData: FormData) => {
  // Type assertion manually other wise it can be null
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const newUser: User = { firstName, lastName, id: Date.now().toString() };
  const users = await fetchUsers();
  users.push(newUser);
  writeFile("users.json", JSON.stringify(users));

  //   console.log("Create User action from utils/actions");
  //   console.log("First Name ", firstName);
  //   console.log("Last Name ", lastName);
  //    Another Approach is
  //   const rawData = Object.fromEntries(formData);
  //   console.log("Raw Data--", rawData);
};

export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile("users.json", { encoding: "utf-8" });
  const users = result ? JSON.parse(result) : [];
  return users;
};
