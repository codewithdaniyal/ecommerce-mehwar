import React from "react";
import { getProductBySlug } from "@/sanity/helpers";
import Container from "@/components/Container";
import ProductDetails from "@/components/ProductDetails";

// Update types for dynamic routing
interface ProductPageProps {
  params: {
    slug: string;
  };
}

// Dynamic routing and async handling
export default async function ProductPage({ params }: ProductPageProps) {
  const slug = params.slug; // Explicitly use slug as a string
  const product = await getProductBySlug(slug);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <Container>
      <ProductDetails product={product} />
    </Container>
  );
}

// Explicitly define dynamic paths
export async function generateStaticParams() {
  const slugs = await fetchAllProductSlugs(); // Replace with your actual data fetching logic
  return slugs.map((slug: string) => ({ params: { slug } }));
}
