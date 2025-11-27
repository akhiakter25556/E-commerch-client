'use client';
import React from "react";
import GallerySection from "../components/GallerySection";


export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 ">
      <h1 className="text-3xl font-bold text-purple-700 mb-6 flex justify-center">My Gallery</h1>
      <p className="text-gray-700 mb-8 flex justify-center">
        Welcome to your gallery. Here you can see some of our premium cars and products.
      </p>
      <GallerySection />
    </div>
  );
}
