import React from "react";
import { getProductBySlug } from "@/sanity/helpers";
import Container from "@/components/Container";
import ProductDetails from "@/components/ProductDetails";
import { notFound } from "next/navigation";

// Define the type for `params` to support async handling
interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

// Dynamic routing and async handling
const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug } = await params; // Await the `params` as it's now a Promise
  const product = await getProductBySlug(slug);

  if (!product) {
    return notFound(); // Use Next.js `notFound` utility for 404 behavior
  }

  return (
    <Container>
      <ProductDetails product={product} />
    </Container>
  );
};

export default ProductPage;

// Explicitly define dynamic paths for static generation
export async function generateStaticParams() {
  const slugs = await fetchAllProductSlugs(); // Replace with your actual data fetching logic
  return slugs.map((slug: string) => ({ slug })); // Ensure `slug` structure matches the updated `params` type
}
