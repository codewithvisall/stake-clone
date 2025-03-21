"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Mail, Twitch } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt with:", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-[#15232D] p-8 rounded-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Link href="/">
            <img src="/logo.svg" alt="Stake" className="h-10" />
          </Link>
        </div>

        <h1 className="text-2xl font-bold text-center mb-6">Log in to Stake</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#1A2C38] border-gray-700 text-white"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#1A2C38] border-gray-700 text-white"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm text-blue-400 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600"
          >
            Log in
          </Button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#15232D] text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <button className="flex justify-center items-center py-2 px-4 border border-gray-700 rounded-md bg-[#1A2C38] hover:bg-[#1A2C38]/80">
              <Facebook className="text-[#1877F2]" size={20} />
            </button>
            <button className="flex justify-center items-center py-2 px-4 border border-gray-700 rounded-md bg-[#1A2C38] hover:bg-[#1A2C38]/80">
              <Mail className="text-[#4285F4]" size={20} />
            </button>
            <button className="flex justify-center items-center py-2 px-4 border border-gray-700 rounded-md bg-[#1A2C38] hover:bg-[#1A2C38]/80">
              <Twitch className="text-[#6441A4]" size={20} />
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-400">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-blue-400 hover:underline font-medium"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
