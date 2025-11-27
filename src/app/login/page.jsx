"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleCredentialsSignIn(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.ok) {
      router.push("/");
    } else {
      setError(res?.error || "Invalid credentials");
    }

    setLoading(false);
  }

  function handleGoogleSignIn() {
    signIn("google", { callbackUrl: "/" });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-2 text-center">Welcome back</h1>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Sign in to continue
        </p>

        {/* Social Login */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full px-4 py-2 rounded-lg border flex items-center justify-center gap-2 hover:shadow-sm mb-6"
          disabled={loading}
        >
          <span>🔵</span> Continue with Google
        </button>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-white px-2 text-gray-500">
              or sign in with email
            </span>
          </div>
        </div>

        {/* Credentials Form */}
        <form onSubmit={handleCredentialsSignIn} className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-purple-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-purple-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              required
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 bg-purple-600 text-white rounded-lg font-medium hover:opacity-95 disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-purple-600">
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}
