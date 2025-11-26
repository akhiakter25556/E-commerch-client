export default function Section({ title, subtitle }) {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-8">{subtitle}</p>
      <div className="grid md:grid-cols-3 gap-6">
        {[1,2,3].map((i) => (
          <div key={i} className="bg-white shadow rounded p-6 hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">Card {i}</h3>
            <p className="text-gray-500">Description for card {i}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
