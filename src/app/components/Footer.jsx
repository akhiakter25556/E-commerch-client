"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo & Info */}
        <div className="text-center md:text-left space-y-2">
          <h1 className="text-2xl font-bold text-purple-500">ShopX</h1>
          <p className="text-gray-300">© 2025 ShopX – All Rights Reserved</p>
          <p className="text-sm text-gray-400">Built with Next.js & Tailwind</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h2 className="font-semibold text-lg mb-2">Quick Links</h2>
          <a href="/" className="hover:text-purple-400 transition">Home</a>
          <a href="/about" className="hover:text-purple-400 transition">About</a>
          <a href="/products" className="hover:text-purple-400 transition">Products</a>
          <a href="/contact" className="hover:text-purple-400 transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-end space-y-2">
          <h2 className="font-semibold text-lg mb-2">Follow Us</h2>
          <div className="flex gap-4">
            <a href="#" className="bg-blue-600 p-3 rounded-full hover:bg-blue-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-blue-400 p-3 rounded-full hover:bg-blue-300 transition">
              <FaTwitter />
            </a>
            <a href="#" className="bg-pink-500 p-3 rounded-full hover:bg-pink-400 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        Designed with ❤️ by ShopX Team
      </div>
    </footer>
  );
}
