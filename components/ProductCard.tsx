// // import Link from "next/link";
// // import Image from "next/image";

// // export default function ProductCard({ product }: { product: any }) {
// //   return (
// //     <Link href={`/product/${product.slug}`} className="border p-4 rounded-xl hover:shadow-md transition">
// //       <Image
// //         src={product.image}
// //         alt={product.title}
// //         width={400}
// //         height={300}
// //         className="w-full h-60 object-cover rounded-md"
// //       />
// //       <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
// //       <p className="text-gray-600">${product.price}</p>
// //     </Link>
// //   );
// // }
// import Link from "next/link";
// import Image from "next/image";

// import { products } from "../lib/products";

// export default function ProductCard({ product }: { product: products }) {
//   return (
//     <Link
//       href={`/product/${product.slug}`}
//       className="border p-4 rounded-xl hover:shadow-md transition"
//     >
//       <Image
//         src={product.image}
//         alt={product.title}
//         width={400}
//         height={300}
//         className="w-full h-60 object-cover rounded-md"
//       />
//       <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
//       <p className="text-gray-600">${product.price}</p>
//     </Link>
//   );
// }
import Link from "next/link";
import Image from "next/image";
import { Product } from "../lib/products"; // ✅ Import correct type

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="border p-4 rounded-xl hover:shadow-md transition"
    >
      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={300}
        className="w-full h-60 object-cover rounded-md"
      />
      <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
    </Link>
  );
}

