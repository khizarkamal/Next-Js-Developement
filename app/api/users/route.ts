import { fetchUsers, saveUser } from "@/utils/actions";

// Be careful while importing

import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: Response) => {
  const users = await fetchUsers();
  console.log(req.nextUrl);
  return Response.json({ users });
};

export const POST = async (req: Request) => {
  const result = await req.json();
  if (!result.firstName && !result.lastName) {
    return Response.json({ error: "Add all fields" });
  }
  try {
    const user = {
      firstName: result.firstName,
      lastName: result.lastName,
      id: Date.now().toString(),
    };

    await saveUser(user);
    return Response.json({
      message: "user created",
    });
  } catch (error) {
    return Response.json({ error });
  }
};
