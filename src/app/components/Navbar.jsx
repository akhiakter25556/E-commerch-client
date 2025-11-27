"use client";

import Link from "next/link";
import { useState } from "react";
import { signOut } from "next-auth/react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="https://i.ibb.co/tM1py891/premium-photo-1687153733088-9fc19cbc59bf.jpg"
            alt="AutoCart Logo"
            className="w-14 h-14 object-cover rounded-full"
          />
          <span className="text-2xl font-extrabold text-purple-700">
            <span className="text-black">Modern</span> E-Commerce
          </span>
        </Link>

        {/* Hamburger Button (Mobile Only) */}
        <button
          className="md:hidden text-3xl text-purple-700"
          onClick={() => setOpenMenu(!openMenu)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <Link href="/" className="hover:text-purple-700">Home</Link>
          <Link href="/products" className="hover:text-purple-700">Products</Link>
          <Link href="/about" className="hover:text-purple-700">About</Link>
          <Link href="/contact" className="hover:text-purple-700">Contact</Link>
          <Link href="/itemlist" className="hover:text-purple-700">Items</Link>
        </div>

        {/* Desktop Auth + Dropdown */}
        <div className="hidden md:flex items-center gap-4 relative">

          <Link
            href="/login"
            className="px-5 py-2.5 bg-gradient-to-r from-purple-700 to-black text-white 
              rounded-xl font-semibold shadow-md hover:scale-105 transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="px-5 py-2.5 bg-gradient-to-r from-purple-700 to-black text-white 
              rounded-xl font-semibold shadow-md hover:scale-105 transition"
          >
            Register
          </Link>

          {/* My Account Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="px-5 py-2.5 bg-gradient-to-r from-purple-700
                        to-black text-white 
                        rounded-xl font-semibold shadow-md hover:scale-105 transition"
            >
              My Account
            </button>

            {openDropdown && (
              <div className="absolute right-0 mt-2 w-44
                              bg-white shadow-lg rounded-lg border overflow-hidden z-50">
                <Link
                  href="/profile"
                  className="block px-4 py-2 hover:bg-purple-100"
                >
                  Profile
                </Link>

                <Link
                  href="/products"
                  className="block px-4 py-2 hover:bg-purple-100"
                >
                  Add Product
                </Link>

            

                <button
                  onClick={() => signOut({ callbackUrl: "/login" })}
                  className="block px-4 py-2 w-full text-left hover:bg-purple-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div className="md:hidden bg-white shadow-inner border-t p-6 space-y-4">

          <Link href="/" className="block text-lg font-medium hover:text-purple-700">Home</Link>
          <Link href="/products" className="block text-lg font-medium hover:text-purple-700">Products</Link>
          <Link href="/about" className="block text-lg font-medium hover:text-purple-700">About</Link>
          <Link href="/contact" className="block text-lg font-medium hover:text-purple-700">Contact</Link>
          <Link href="/itemlist" className="block text-lg font-medium hover:text-purple-700">Items</Link>

          <hr />

          <Link
            href="/login"
            className="block w-full text-center px-5 py-2.5 bg-gradient-to-r
                      from-purple-700 to-black text-white 
                      rounded-xl font-semibold shadow-md hover:scale-105 transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="block w-full text-center px-5 py-2.5 bg-gradient-to-r
                      from-purple-700 to-black text-white 
                      rounded-xl font-semibold shadow-md hover:scale-105 transition"
          >
            Register
          </Link>

          {/* Mobile Account Menu */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="block w-full text-center px-5 py-2.5 bg-gradient-to-r
                        from-purple-700 to-black text-white
                        rounded-xl font-semibold shadow-md hover:scale-105 transition"
            >
              My Account
            </button>

            {openDropdown && (
              <div className="bg-white border rounded-lg shadow p-4 space-y-2 mt-2">
                <Link href="/profile" className="block px-2 py-1 hover:bg-purple-100 rounded">Profile</Link>
                <Link href="/products" className="block px-2 py-1 hover:bg-purple-100 rounded">Add Product</Link>
                <Link href="/manage-products" className="block px-2 py-1 hover:bg-purple-100 rounded">Manage Products</Link>
                <button
                  onClick={() => signOut({ callbackUrl: "/login" })}
                  className="block w-full text-left px-2 py-1 hover:bg-purple-100 rounded"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
