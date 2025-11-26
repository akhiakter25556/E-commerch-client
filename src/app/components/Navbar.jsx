"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  // const { data: session } = useSession();
  const [openMenu, setOpenMenu] = useState(false);

  // const loggedIn = !!session;

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">

        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://i.ibb.co/tM1py891/premium-photo-1687153733088-9fc19cbc59bf.jpg"
            alt="AutoCart Logo"
            className="w-16 h-16 object-cover rounded-full"
          />
          <span className="text-2xl font-extrabold text-purple-700">VelocityCars</span>
        </Link>

        <div className="hidden md:flex gap-8 font-medium text-gray-700">
          <Link href="/" className="hover:text-purple-700">Home</Link>
          <Link href="/products" className="hover:text-purple-700">Products</Link>
          <Link href="/about" className="hover:text-purple-700">About</Link>
          <Link href="/contact" className="hover:text-purple-700">Contact</Link>
          <Link href="/item-list" className="hover:text-purple-700">Items</Link>
        </div>

        {/* Auth Section */}
        <div>
          {/* {!loggedIn ? ( */}
            <div className="flex gap-4">
              <Link
                href="/login"
                className="px-4 py-2 border-2 border-purple-700 text-purple-700 rounded-lg hover:bg-purple-700 hover:text-white transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 bg-gradient-to-r from-purple-700 to-black text-white rounded-lg hover:scale-105 transition"
              >
                Register
              </Link>
            </div>
      
            <div className="relative">
              <button
                className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-black transition"
                onClick={() => setOpenMenu(!openMenu)}
              >
                My Account
              </button>

              {openMenu && (
                <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg border overflow-hidden">
                  <Link href="/profile" className="block px-4 py-2 hover:bg-purple-100">Profile</Link>
                  <Link href="/add-product" className="block px-4 py-2 hover:bg-purple-100">Add Product</Link>
                  <Link href="/manage-products" className="block px-4 py-2 hover:bg-purple-100">Manage Products</Link>

                  <button
                    onClick={() => signOut({ callbackUrl: "/login" })}
                    className="block px-4 py-2 w-full text-left hover:bg-purple-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          {/* )} */}
        </div>

      </div>
    </nav>
  );
}
