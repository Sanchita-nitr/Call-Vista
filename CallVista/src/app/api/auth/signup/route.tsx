// app/api/auth/signup/route.ts
import { connectToDB } from "../../../lib/db";
import { User } from "../../../models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await connectToDB();
  const { username, email, password } = await req.json();

  const userExists = await User.findOne({ email });
  if (userExists) {
    return NextResponse.json({ message: "User already exists" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  await newUser.save();

  return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
}
