"use client";

import { useState } from "react";

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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // এখানে তুমি চাইলে fetch API call দিতে পারো,
    // কিন্তু backend না থাকলে শুধু console.log
    console.log("Form Data Submitted:", formData);

    setTimeout(() => {
      alert("Event submitted successfully (frontend only)");
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
      <h1 className="text-3xl font-bold mb-6">Create New Event</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
        <input name="title" value={formData.title} onChange={handleChange} placeholder="Event Title" className="w-full border px-4 py-2 rounded" />
        <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="w-full border px-4 py-2 rounded" />
        <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Price" className="w-full border px-4 py-2 rounded" />
        <textarea name="shortDescription" value={formData.shortDescription} onChange={handleChange} placeholder="Short Description" className="w-full border px-4 py-2 rounded" />
        <textarea name="fullDescription" value={formData.fullDescription} onChange={handleChange} placeholder="Full Description" className="w-full border px-4 py-2 rounded" />
        <input name="date" type="datetime-local" value={formData.date} onChange={handleChange} className="w-full border px-4 py-2 rounded" />
        <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" className="w-full border px-4 py-2 rounded" />
        <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="Image URL" className="w-full border px-4 py-2 rounded" />
        <button type="submit" disabled={loading} className="px-6 py-2 bg-blue-600 text-white rounded">
          {loading ? "Creating..." : "Create Event"}
        </button>
      </form>
    </div>
  );
}
