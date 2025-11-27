import React from "react";
import Link from "next/link";

// Dummy Data
const items = [
  { id: 1, title: "Classic Watch", desc: "Full desc...", price: "$21", img: 
    "https://i.ibb.co/W4Qftq5c/0b0253b7388244626e3c135f876da6d4.jpg", 
    date: "2025-01-12", priority: "High" },
  { id: 2, title: "Smart Watch", desc: "Full desc...", price: "$35",
     img: "https://i.ibb.co/HLQ8syzH/photo-1615554754180-20118f604097.jpg",
      date: "2025-02-03", priority: "Medium" },
  { id: 3, title: "Pro Watch", desc: "Full desc...", price: "$49", img:
     "https://i.ibb.co/HLQ8syzH/photo-1615554754180-20118f604097.jpg", date:
      "2025-04-10", priority: "Low" },
  { id: 4, title: "Digital Watch", desc: "Full desc...", price: "$89", 
    img: "https://i.ibb.co/HLQ8syzH/photo-1615554754180-20118f604097.jpg",
     date: "2025-05-02", priority: "High" },
];

export default async function ItemDetails({ params }) {

  const { id } = await params;

  const item = items.find((i) => i.id == id);

  if (!item) {
    return <p className="mt-10 text-center text-red-500">Item not found</p>;
  }

  return (
    <div className="py-12 px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">

{/* Image */}
<div className="w-80 h-64 rounded-xl overflow-hidden shadow-lg mb-6 flex-shrink-0">
  <img
    src="https://i.ibb.co/W4Qftq5c/0b0253b7388244626e3c135f876da6d4.jpg" // Classic car image
    alt="Classic Car"
    className="w-full h-full object-cover"
  />
</div>



      {/* Title */}
{/* Title Section */}
<div className="w-full md:w-1/2 flex flex-col justify-center">
  <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">Featured Car</h2>
  
  <p className="text-gray-700 mb-4">
    This is a premium quality car with advanced features and excellent performance.
  </p>
  
  <p className="text-gray-600 mb-6">
    <span className="block"><strong>Price:</strong> $45,000</span>
    <span className="block"><strong>Model:</strong> 2025</span>
    <span className="block"><strong>Priority:</strong> High</span>
  </p>

  <Link
    href="/itemlist"
    className="inline-block px-6 py-3 bg-gradient-to-r from-purple-700 to-black
               text-white font-semibold rounded-xl shadow hover:scale-105 hover:shadow-lg
               transition-all duration-300"
  >
    Back to Products
  </Link>
</div>


  




    </div>
  );
}
