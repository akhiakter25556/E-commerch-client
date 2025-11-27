'use client';
import React from "react";
import Link from "next/link";

const galleryImages = [
  "https://i.ibb.co/W4Qftq5c/0b0253b7388244626e3c135f876da6d4.jpg",
  "https://i.ibb.co/HLQ8syzH/photo-1615554754180-20118f604097.jpg",
  "https://i.ibb.co/N66R0gj5/images-6.jpg",
  "https://i.ibb.co/xtVjch4s/images-5.jpg",
  "https://i.ibb.co/7DTvhyx/download-6.jpg",
  "https://i.ibb.co/s9crXQT3/images-4.jpg",
];

export default function GallerySection() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
      
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition shadow-gray-300"
          >
            <img
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition flex items-center justify-center">
              <Link
                href={img}
                className="px-4 py-2 bg-purple-700 text-white rounded-lg shadow-lg hover:bg-purple-800 transition"
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
