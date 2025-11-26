"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="container mx-auto px-4 text-center space-y-2">
        <p className="mb-2">© 2025 ShopX – All Rights Reserved</p>
        <p className="text-sm text-gray-300">Built with Next.js & Tailwind</p>

        {/* Links */}
        <div className="flex justify-center gap-6 mt-4">
          <a href="/" className="hover:text-purple-500 transition">Home</a>
          <a href="/about" className="hover:text-purple-500 transition">About</a>
          <a href="/products" className="hover:text-purple-500 transition">Products</a>
          <a href="/contact" className="hover:text-purple-500 transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-3">
          <a href="#" className="hover:text-blue-500 transition">FB</a>
          <a href="#" className="hover:text-blue-400 transition">TW</a>
          <a href="#" className="hover:text-pink-500 transition">IG</a>
        </div>
      </div>


      {/* Tailwind CSS marquee animation */}
      <style jsx>{`
        .animate-marquee {
          display: inline-flex;
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </footer>
  );
}
