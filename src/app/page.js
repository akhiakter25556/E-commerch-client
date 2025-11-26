'use client';
import Link from 'next/link';

const features = [
  { id: 1, title: "Fast Delivery", desc: "Get your products in record time.", icon: "🚚" },
  { id: 2, title: "Quality Products", desc: "Only the best items in our catalog.", icon: "🏆" },
  { id: 3, title: "24/7 Support", desc: "We are here to help anytime.", icon: "📞" },
];

const items = [
  { id: 1, title: "Watch", desc: "Classic Watch", price: "$21", img: "https://i.ibb.co/jkjCNr4c/download-3.jpg" },
  { id: 2, title: "Shoes", desc: "Running Shoes", price: "$40", img: "https://i.ibb.co/0FjdDFd/photo-1552346154-d7d0deeddb06.jpg" },
  { id: 3, title: "Bag", desc: "Leather Bag", price: "$60", img: "https://i.ibb.co/qR0vXYF/photo-1542831371-d531d36971e6.jpg" },
];

const testimonials = [
  { id: 1, name: "Alice", message: "Amazing service and fast delivery!" },
  { id: 2, name: "Bob", message: "High-quality products, very satisfied." },
];

export default function LandingPage() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-purple-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to AutoCart</h1>
        <p className="text-lg md:text-xl mb-8">Your one-stop shop for quality products delivered fast.</p>
        <Link href="/itemlist" className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Shop Now
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8 text-purple-700">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(f => (
            <div key={f.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Items Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-purple-700">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map(item => (
            <div key={item.id} className="border rounded-lg shadow hover:shadow-lg transition p-4">
              <img src={item.img} alt={item.title} className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-500 text-sm line-clamp-2">{item.desc}</p>
              <p className="font-bold mt-2">{item.price}</p>
              <button className="mt-4 w-full py-2 bg-purple-700 text-white rounded hover:bg-purple-800 transition">Details</button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8 text-purple-700">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <p className="text-gray-700 mb-4">"{t.message}"</p>
              <p className="font-semibold text-purple-700">- {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Banner / CTA Section */}
      <section className="relative bg-purple-700 text-white py-20 px-6 text-center rounded-t-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Shop?</h2>
        <p className="text-lg md:text-xl mb-8">Browse our amazing collection and get your products fast.</p>
        <Link href="/products" className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Shop Now
        </Link>
      </section>
    </div>
  );
}
