import { notFound } from 'next/navigation';   // <-- Add this import
import Image from 'next/image';
//import { products, Product } from '../../../lib/products';
import { products , Product } from '../../../../lib/products';

interface Props {
  params: {
    slug: string;
  };
}

export default function ProductDetailPage({ params }: Props) {
  const { slug } = params;

  // Find product matching slug
  const product: Product | undefined = products.find(p => p.slug === slug);

  if (!product) {
    notFound(); // Show 404 if no product found
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>{product.title}</h1>
      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={400}
        style={{ borderRadius: 8 }}
      />
      <p style={{ marginTop: 10, fontSize: 18 }}>{product.description}</p>
      <p style={{ marginTop: 10, fontWeight: 'bold' }}>Price: ${product.price.toFixed(2)}</p>
    </main>
  );
}
