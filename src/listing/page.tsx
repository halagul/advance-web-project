// import { products } from "@/lib/products";
// import ProductCard from "@/components/ProductCard";
// import Navbar from "@/components/Navbar";

import { products } from "../../lib/products";
import ProductCard from "../../components/ProductCard";
import Navbar from "../../components/Navbar";

export default function Listing() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  );
}
