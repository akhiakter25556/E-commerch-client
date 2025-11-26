export default function Testimonials() {
  const reviews = [
    {
      name: "Sara",
      comment: "Amazing service and fast delivery!",
    },
    {
      name: "John",
      comment: "Great product quality. Highly recommended!",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-10">Testimonials</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="p-6 border rounded-md hover:shadow-lg transition"
            >
              <p className="text-gray-700 mb-2">"{r.comment}"</p>
              <h4 className="font-bold">- {r.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
