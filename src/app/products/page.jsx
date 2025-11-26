
import { FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa";

const products = [
  { id: 1, name: "Classic Watch", price: "$21", img: "https://i.ibb.co/HLQ8syzH/photo-1615554754180-20118f604097.jpg" },
  { id: 2, name: "Leather Bag", price: "$21", img: "https://i.ibb.co/1JqLdLBp/photo-1589148938909-4d241c91ee52.jpg" },
  { id: 3, name: "Sport Shoes", price: "$21", img: "https://i.ibb.co/HLQ8syzH/photo-1615554754180-20118f604097.jpg" },
  { id: 4, name: "Sunglasses", price: "$21", img: "https://i.ibb.co/GvKfJb82/photo-1658163241869-ee50aad1495b.jpg" },
];

export default function Products() {

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 justify-center items-center flex">
  <span className="text-black">Our</span>{" "}
  <span className="text-purple-600">Products</span>
</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden
             shadow-md hover:shadow-xl transition-shadow"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-64 object-cover"
            />

            {/* Product info */}
            <div className="p-4 relative group">
              <h2 className="font-semibold text-lg">{product.name}</h2>

              {/* Price and hover icons */}
              <div className="mt-2 relative">
                <p className="text-gray-700 inline-block group-hover:opacity-50 transition-opacity duration-300">
                  {product.price}
                </p>

                {/* Icons shown on hover of price */}
                <div className="absolute top-0 left-0 flex gap-2 opacity-0 
                group-hover:opacity-100 transition-opacity duration-300">
                  <button className="text-white bg-gray-800 p-2 rounded-full
                   hover:bg-gray-700">
                    <FaSearch size={14} />
                  </button>
                  <button className="text-white bg-gray-800 p-2 rounded-full
                   hover:bg-gray-700">
                    <FaShoppingCart size={14} />
                  </button>
                  <button className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700">
                    <FaHeart size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

