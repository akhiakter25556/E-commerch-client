export default function ProductShowcase() {
  const items = [
    { name: "Headphone", price: 90 },
    { name: "Laptop Bag", price: 50 },
    { name: "Smart Watch", price: 110 },
    { name: "Keyboard", price: 40 },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-10">
          Popular Products
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="border p-5 rounded-md hover:shadow-lg transition"
            >
              <div className="h-32 bg-gray-200 rounded mb-3"></div>
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-blue-600 font-bold">${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
