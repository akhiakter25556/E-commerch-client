export default function Features() {
  const features = [
    {
      title: "Fast Delivery",
      text: "Get your products quickly and safely.",
    },
    {
      title: "Secure Payment",
      text: "We support all trusted payment gateways.",
    },
    {
      title: "Customer Support",
      text: "24/7 dedicated customer support.",
    },
    {
      title: "Easy Return",
      text: "Hassle-free product return policy.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-10">Why Choose Us</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 border hover:shadow-lg transition rounded-md"
            >
              <h3 className="font-bold mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
