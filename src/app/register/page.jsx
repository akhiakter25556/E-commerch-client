"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
 
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      
      {/* Left Side - Car Image */}
      <div className="md:w-1/2 hidden md:block">
        <img
          src="https://i.ibb.co/v6KZ2Bqy/download-2.jpg"
          alt="Car"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Registration Form */}
      <div className="md:w-1/2 flex items-center justify-center bg-gray-50 p-8">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-4">
          <h1 className="text-2xl font-bold text-center text-purple-700 mb-4">
            Create an Account
          </h1>
          <form onSubmit={handleRegister} className="space-y-4">
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
              className="w-full p-3 border rounded-lg focus:outline-none
               focus:ring-2 focus:ring-purple-700"
            />
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white rounded-lg 
              font-semibold hover:bg-green-700 transition"
            >
              Register
            </button>
          </form>
          <p className="text-center text-gray-500 text-sm mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-purple-700 font-semibold">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
