// app/api/auth/login/route.ts
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { connectToDB } from "../../../lib/db";
import { User } from "../../../models/User";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret";

export async function POST(req: Request) {
  await connectToDB();
  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 }
    );
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 }
    );
  }

  const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
    expiresIn: "1d",
  });

  return NextResponse.json(
    { token, user: { username: user.username, email: user.email } },
    { status: 200 }
  );
}
