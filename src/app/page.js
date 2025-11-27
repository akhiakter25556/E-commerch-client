'use client';
import Link from 'next/link';

const features = [
  { id: 1, title: "Easy Way", desc: "Get your products in record time.", icon: "🚚" },
  { id: 2, title: "Quality Products", desc: "Only the best items in our catalog.", icon: "🏆" },
  { id: 3, title: "24/7 Support", desc: "We are here to help anytime.", icon: "📞" },
];

const items = [
  {
    id: 1,
    title: "Car",
    desc: "Mercedes-Benz",
    price: "$21",
    img: "https://i.ibb.co/s9crXQT3/images-4.jpg",
  },
  {
    id: 2,
    title: "Car",
    desc: "BMW",
    price: "$40",
    img: "https://i.ibb.co/whCvTFPn/download-5.jpg",
  },
  {
    id: 3,
    title: "Tesla",
    desc: "Leather Bag",
    price: "$60",
    img: "https://i.ibb.co/3yqhtdsK/images-3.jpg",
  },
  {
    id: 4,
    title: "Car",
    desc: "Mercedes-Benz Sport",
    price: "$50",
    img: "https://i.ibb.co/vxzbTZHX/images-1.jpg",
  },
  {
    id: 5,
    title: "Car",
    desc: "BMW Limited Edition",
    price: "$55",
    img: "https://i.ibb.co/XZmjgMQd/download-4.jpg",
  },
  {
    id: 6,
    title: "Tesla",
    desc: "Premium Leather Bag",
    price: "$70",
    img: "https://i.ibb.co/hJwJkPnK/images-2.jpg",
  },
];



const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    message: "Great products! Fast delivery and amazing quality.",
    img: "https://i.ibb.co/Zpb5KBBq/istockphoto-1035956624-612x612.jpg"
  },
  {
    id: 2,
    name: "Michael Smith",
    message: "I love shopping here. Excellent customer service!",
    img: "https://i.ibb.co/cnTqRtt/gettyimages-485849913-612x612.jpg"
  }
];




export default function LandingPage() {
  return (
    <div className="font-sans">
 {/* Hero Section */}
<section
  className="relative overflow-hidden text-white py-28 px-6 flex
   items-center justify-center"
  style={{
    backgroundImage: `url('https://i.ibb.co/0psQ927N/beautiful-girl-near-black-car-260nw-2614276117.webp')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

  {/* Dark + Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>

  {/* Decorative Floating Blurs */}
  <div className="absolute top-10 left-10 w-40 h-40 bg-purple-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
  <div className="absolute bottom-10 right-10 w-56 h-56 bg-purple-900 opacity-20 blur-3xl rounded-full animate-ping"></div>

  {/* Main Content */}
  <div className="relative z-10 max-w-2xl mx-auto text-center">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg 
    animate-[fadeInUp_1s_ease-out]">
      Drive Your Dream Car Today
    </h1>

    <p className="text-lg md:text-xl mb-8 text-gray-200 
    animate-[fadeInUp_1.4s_ease-out]">
      Premium cars. Best prices. Trusted deals — only at CarXPress.
    </p>

    <Link
      href="/itemlist"
      className="inline-block bg-purple-600/90 backdrop-blur-md text-white px-10 py-3 
      rounded-xl font-semibold shadow-lg hover:bg-purple-700 hover:scale-110 
      hover:shadow-2xl transition-transform duration-300 animate-[fadeInUp_1.8s_ease-out]"
    >
      Explore Cars
    </Link>
  </div>
</section>



   {/* Features Section – Car Styled */}
<section className="py-16 px-6 bg-gradient-to-b from-gray-100 to-white text-center">
  <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-purple-700 tracking-wide">
    Why Choose AutoCart
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {features.map(f => (
      <div
        key={f.id}
        className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl 
        transition-all border border-purple-100 hover:border-purple-300"
      >
        <div className="text-5xl mb-5 text-purple-700">{f.icon}</div>

        <h3 className="text-2xl font-bold mb-3 text-gray-800">
          {f.title}
        </h3>

        <p className="text-gray-600 leading-relaxed">
          {f.desc}
        </p>
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
              <img src={item.img} alt={item.title} className="w-full
               h-40 object-cover rounded mb-4" />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-500 text-sm line-clamp-2">{item.desc}</p>
              <p className="font-bold mt-2">{item.price}</p>
<Link
  href={`/item/${item.id}`}
  className="mt-4 block text-center w-full py-2
   font-semibold text-white
    bg-gradient-to-r from-purple-700 to-black
    shadow-lg shadow-purple-900/40
    hover:scale-105 hover:shadow-purple-700/60
    transition-all duration-300 disabled:opacity-50"
>
  Details
</Link>

            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
    <section className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-12 text-purple-700">
        What Our Customers Say</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg
             transition flex items-center gap-4"
          >
            {/* Circular Customer Image */}
            <img
              src={t.img}
              alt={t.name}
              className="w-16 h-16 rounded-full object-cover"
            />

            {/* Testimonial Text */}
            <div className="text-left">
              <p className="text-gray-700 mb-2">"{t.message}"</p>
              <p className="font-semibold text-purple-700">- {t.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* Banner / CTA Section */}
<section className="relative bg-purple-700 text-white py-20 
px-6 rounded-t-lg">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row
   items-center gap-8">
    
    {/* Image Left */}
    <div className="w-full md:w-1/2">
      <img
        src="https://i.ibb.co/Zpb5KBBq/istockphoto-1035956624-612x612.jpg"
        alt="Shop Image"
        className="w-full h-200 md:h-80 object-cover rounded-lg shadow-lg"
      />
    </div>

 <div className="flex flex-col md:flex-row items-center
  justify-between max-w-6xl mx-auto px-6 py-12 gap-8">
  
  {/* Text + Button Right */}
  <div className="w-full md:w-1/2 text-center md:text-left">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Shop?</h2>
    <p className="text-lg md:text-xl mb-8 text-gray-700">
      Browse our amazing collection and get your products fast.
    </p>
    <Link
      href="/products"
      className="inline-block bg-white text-purple-700 
                 px-6 py-3 rounded-lg font-semibold
                 hover:bg-gray-100 transition"
    >
      Shop Now
    </Link>
  </div>

  {/* Optional Image Left */}
  <div className="w-full md:w-1/2">
    <img
      src="https://i.ibb.co/0psQ927N/beautiful-girl-near-black-car-260nw-2614276117.webp"
      alt="Shop Now"
      className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
    />
  </div>

</div>


  </div>
</section>

    </div>
  );
}
