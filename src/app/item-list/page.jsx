'use client';
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (res?.ok) router.push("/itemlist");
    else alert("Login failed");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-1/2 hidden md:block">
        <img
          src="https://i.ibb.co/zWPf8Ggg/2790.jpg"
          alt="Car"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="md:w-1/2 flex items-center justify-center bg-gray-50 p-8">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-4">
          <h1 className="text-2xl font-bold text-center text-purple-700 mb-4">
            Login to AutoCart
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none 
              focus:ring-2 focus:ring-purple-700"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
            />
            <button
              type="submit"
              className="w-full py-3 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 transition"
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => signIn("google")}
              className="w-full py-3 bg-red-600 text-white 
              rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Login with Google
            </button>
          </form>
          <p className="text-center text-gray-500 text-sm mt-4">
            Don't have an account? <a href="/register" className="text-purple-700 font-semibold">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}


