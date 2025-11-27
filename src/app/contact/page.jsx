"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    fullDescription: "",
    price: "",
    date: "",
    category: "",
    location: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("Form Data Submitted:", formData);

    setTimeout(() => {
      toast.success("Event submitted successfully!", {
        position: "top-right",
      });

      setLoading(false);

      setFormData({
        title: "",
        shortDescription: "",
        fullDescription: "",
        price: "",
        date: "",
        category: "",
        location: "",
        imageUrl: "",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Toastify container */}
      <ToastContainer />

      <h1 className="text-3xl font-bold mb-6 flex justify-center">Create New <span className="text-purple-800"> Event</span></h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
        <input name="title" value={formData.title} onChange={handleChange} placeholder="Event Title" className="w-full border px-4 py-2 rounded" />
        <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="w-full border px-4 py-2 rounded" />
        <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Price" className="w-full border px-4 py-2 rounded" />
        <textarea name="shortDescription" value={formData.shortDescription} onChange={handleChange} placeholder="Short Description" className="w-full border px-4 py-2 rounded" />
        <textarea name="fullDescription" value={formData.fullDescription} onChange={handleChange} placeholder="Full Description" className="w-full border px-4 py-2 rounded" />
        <input name="date" type="datetime-local" value={formData.date} onChange={handleChange} className="w-full border px-4 py-2 rounded" />
        <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" className="w-full border px-4 py-2 rounded" />
        <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="Image URL" className="w-full border px-4 py-2 rounded" />

       <button
  type="submit"
  disabled={loading}
  className="
    px-8 py-3 rounded-xl font-semibold text-white
    bg-gradient-to-r from-purple-700 to-black
    shadow-lg shadow-purple-900/40
    hover:scale-105 hover:shadow-purple-700/60
    transition-all duration-300 disabled:opacity-50
  "
>
  {loading ? "Creating..." : "Create Event"}
</button>

      </form>
    </div>
  );
}
