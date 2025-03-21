"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Facebook, Mail, Twitch } from "lucide-react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeAge, setAgreeAge] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup attempt with:", {
      email,
      password,
      username,
      agreeTerms,
      agreeAge,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="bg-[#15232D] p-8 rounded-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Link href="/">
            <img src="/logo.svg" alt="Stake" className="h-10" />
          </Link>
        </div>

        <h1 className="text-2xl font-bold text-center mb-6">
          Create your Stake account
        </h1>

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
              htmlFor="username"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Username
            </label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-[#1A2C38] border-gray-700 text-white"
              placeholder="Choose a username"
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
              placeholder="Create a password"
              required
            />
            <p className="mt-1 text-xs text-gray-400">
              Must be at least 8 characters with 1 number and 1 letter
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-start">
              <Checkbox
                id="terms"
                checked={agreeTerms}
                onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                className="mt-1"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-400">
                I agree to the{" "}
                <Link href="/terms" className="text-blue-400 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-blue-400 hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <div className="flex items-start">
              <Checkbox
                id="age"
                checked={agreeAge}
                onCheckedChange={(checked) => setAgreeAge(checked as boolean)}
                className="mt-1"
              />
              <label htmlFor="age" className="ml-2 text-sm text-gray-400">
                I am at least 18 years old
              </label>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600"
            disabled={!agreeTerms || !agreeAge}
          >
            Create account
          </Button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#15232D] text-gray-400">
                Or sign up with
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
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-400 hover:underline font-medium"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
