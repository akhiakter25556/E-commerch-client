'use client';
import Link from "next/link";
import { useState } from "react";

const products = [
  { id: 1, title: "Classic Watch", desc: "Premium quality watch", price: "$21", img: "https://i.ibb.co/W4Qftq5c/0b0253b7388244626e3c135f876da6d4.jpg" },
  { id: 2, title: "Smart Watch", desc: "Advanced smart watch", price: "$35", img: "https://i.ibb.co/tTF4P9wZ/e74783ec-b191-4904-9c68-a4b2819f6081-Destiny-Cameron-01-Getting-Ready-21.jpg" },
  { id: 3, title: "Leather Watch", desc: "Stylish leather bag", price: "$60", img: "https://i.ibb.co/7J68ZKjj/a7ba0bb3-2b36-43bc-9cd0-bff54860ac3a.webp" },
  { id: 4, title: "Running Shoes", desc: "Comfortable running shoes", price: "$40", img: "https://i.ibb.co/5qFB4nb/download-1.jpg" },
  { id: 5, title: " Shoes", desc: "Noise-cancelling headphones", price: "$80", img: "https://i.ibb.co/Kpbph9kc/download.jpg" },
  { id: 6, title: "Sunglasses Shoes", desc: "Trendy sunglasses", price: "$30", img: "https://i.ibb.co/5qFB4nb/download-1.jpg" },
];

export default function ItemListPage() {
  const [search, setSearch] = useState("");
  const filteredProducts = products.filter(
    (p) => p.title.toLowerCase().includes(search.toLowerCase())
       || p.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-2 text-purple-700">Our Products</h1>
      <p className="text-gray-600 mb-6">Browse our top-quality products. Click "Details" for more info.</p>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 p-3 w-full md:w-1/2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 shadow hover:shadow-lg flex flex-col">
            <div className="h-48 overflow-hidden rounded-lg mb-4">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
            </div>
            <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
            <p className="text-gray-600 text-sm mb-2 line-clamp-2">{item.desc}</p>
            <p className="font-bold mb-4">{item.price}</p>
         <Link
  href={`/item/${item.id}`}
  className="mt-4 block text-center w-full py-2
   font-semibold text-white
    bg-gradient-to-r from-purple-700 to-black
    shadow-lg shadow-purple-900/40
    hover:scale-105 hover:shadow-purple-700/60
    transition-all duration-300 disabled:opacity-50"
>
  Details
</Link>
          </div>
        ))}
        {filteredProducts.length === 0 && <p className="text-center text-gray-500 col-span-full">No products found.</p>}
      </div>
    </div>
  );
}
