'use client';
import Link from "next/link";
import { useState } from "react";

const products = [
  { id: 1, title: "Classic Watch", desc: "Premium quality watch", price: "$21", img: "https://i.ibb.co/W4Qftq5c/0b0253b7388244626e3c135f876da6d4.jpg" },
  { id: 2, title: "Smart Watch", desc: "Advanced smart watch", price: "$35", img: "https://i.ibb.co/HLQ8syzH/photo-1615554754180-20118f604097.jpg" },
  { id: 3, title: "Leather Bag", desc: "Stylish leather bag", price: "$60", img: "https://i.ibb.co/qR0vXYF/photo-1542831371-d531d36971e6.jpg" },
  { id: 4, title: "Running Shoes", desc: "Comfortable running shoes", price: "$40", img: "https://i.ibb.co/0FjdDFd/photo-1552346154-d7d0deeddb06.jpg" },
  { id: 5, title: "Headphones", desc: "Noise-cancelling headphones", price: "$80", img: "https://i.ibb.co/6bqZ0xB/photo-1517059224940-d4af9eec41e5.jpg" },
  { id: 6, title: "Sunglasses", desc: "Trendy sunglasses", price: "$30", img: "https://i.ibb.co/y0z9JGy/photo-1483985988355-763728e1935b.jpg" },
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
