"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#ad2e00] to-[#ad2e00]">
      <div className="bg-[#fff8dc] p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-8">
          <p className="text-[#ad2e00]">Login in to your account</p>
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#ad2e00] mb-1"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 text-[#ad2e00] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ad2e00]"
            placeholder="your@email.com"
          />
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-1">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#ad2e00]"
            >
              Password
            </label>
            <a
              href="/auth/forgotpassword"
              className="text-sm text-[#ad2e00] hover:text-[#e65520]"
            >
              Forgot password?
            </a>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border text-[#ad2e00] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ad2e00]"
            placeholder="••••••••"
          />
        </div>

        <div className="mb-6">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-[#ad2e00] focus:ring-[#ad2e00] border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-[#ad2e00]"
            >
              Remember me
            </label>
          </div>
        </div>

        <button
          type="submit"
          onClick={() => {
            router.push("/dashboard");
          }}
          className="w-full bg-[#ad2e00] hover:bg-[#e65520] text-white py-2 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e65520] transition duration-150"
        >
          Sign in
        </button>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a
              href="/dashboard"
              className="text-[#ad2e00] hover:text-[#e65520] font-medium"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
