import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Modern E-Commerce Experience
        </h1>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Shop products with ease using a modern and responsive shopping interface.
        </p>

        <Link
          href="/products"
          className="bg-blue-600 text-white px-6 py-3 rounded-md"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
