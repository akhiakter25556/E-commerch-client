'use client';
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';

const products = [
  { id: 1, title: "Watch", desc: "Classic Watch", price: "$21", img: "https://i.ibb.co/HLQ8syzH/photo-1615554754180-20118f604097.jpg" },
  { id: 2, title: "Shoes", desc: "Running Shoes", price: "$40", img: "https://i.ibb.co/0FjdDFd/photo-1552346154-d7d0deeddb06.jpg" },
  { id: 3, title: "Bag", desc: "Leather Bag", price: "$60", img: "https://i.ibb.co/qR0vXYF/photo-1542831371-d531d36971e6.jpg" },
  { id: 4, title: "Sunglasses", desc: "Cool Shades", price: "$30", img: "https://i.ibb.co/y0z9JGy/photo-1483985988355-763728e1935b.jpg" },
  { id: 5, title: "Hat", desc: "Stylish Hat", price: "$15", img: "https://i.ibb.co/4MnJ8R9/photo-1475180094084-0f9ca52d8b83.jpg" },
  { id: 6, title: "Headphones", desc: "Noise-cancelling", price: "$80", img: "https://i.ibb.co/6bqZ0xB/photo-1517059224940-d4af9eec41e5.jpg" },
];

export default function ItemListPage() {
  return (
    <PrivateRoute>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-2 text-purple-700">Our Products</h1>
        <p className="mb-6 text-gray-600">Browse through our collection of top-quality products.</p>

        <input
          type="text"
          placeholder="Search products..."
          className="mb-6 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
              <img src={product.img} alt={product.title} className="w-full h-40 object-cover rounded mb-4" />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-500 text-sm line-clamp-2">{product.desc}</p>
              <p className="font-bold mt-2">{product.price}</p>
              <button className="mt-4 w-full py-2 bg-purple-700 text-white rounded hover:bg-purple-800 transition">
                Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </PrivateRoute>
  );
}


// 'use client';
// import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';
// import Navbar from '@/components/Navbar';

// const products = [
//   { id: 1, title: "Watch", desc: "Classic Watch", price: "$21", img: "https://i.ibb.co/HLQ8syzH/photo-1615554754180-20118f604097.jpg" },
//   { id: 2, title: "Shoes", desc: "Running Shoes", price: "$40", img: "https://i.ibb.co/0FjdDFd/photo-1552346154-d7d0deeddb06.jpg" },
//   { id: 3, title: "Bag", desc: "Leather Bag", price: "$60", img: "https://i.ibb.co/qR0vXYF/photo-1542831371-d531d36971e6.jpg" },
//   { id: 4, title: "Sunglasses", desc: "Cool Shades", price: "$30", img: "https://i.ibb.co/y0z9JGy/photo-1483985988355-763728e1935b.jpg" },
//   { id: 5, title: "Hat", desc: "Stylish Hat", price: "$15", img: "https://i.ibb.co/4MnJ8R9/photo-1475180094084-0f9ca52d8b83.jpg" },
//   { id: 6, title: "Headphones", desc: "Noise-cancelling", price: "$80", img: "https://i.ibb.co/6bqZ0xB/photo-1517059224940-d4af9eec41e5.jpg" },
// ];

// export default function ItemListPage() {
//   return (
//     <PrivateRoute>
//       <Navbar />
//       <div className="p-8">
//         <h1 className="text-3xl font-bold mb-2 text-purple-700">Our Products</h1>
//         <p className="mb-6 text-gray-600">Browse through our collection of top-quality products.</p>

//         <input
//           type="text"
//           placeholder="Search products..."
//           className="mb-6 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
//         />

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {products.map((product) => (
//             <div key={product.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
//               <img src={product.img} alt={product.title} className="w-full h-40 object-cover rounded mb-4" />
//               <h2 className="text-lg font-semibold">{product.title}</h2>
//               <p className="text-gray-500 text-sm line-clamp-2">{product.desc}</p>
//               <p className="font-bold mt-2">{product.price}</p>
//               <button className="mt-4 w-full py-2 bg-purple-700 text-white rounded hover:bg-purple-800 transition">
//                 Details
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </PrivateRoute>
//   );
// }
