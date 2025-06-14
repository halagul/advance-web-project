
import Image from "next/image";
import { Product } from "../lib/products"; // ✅ FIXED: Import the Product type

export default function ProductDetail({ product }: { product: Product }) {
  return (
    <div>
      <Image
        src={product.image}
        alt={product.title}
        width={800}
        height={500}
        className="w-full h-96 object-cover rounded-xl"
      />
      <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-500 mt-2">${product.price}</p>
      <p className="mt-4">{product.description}</p>
    </div>
  );
}
