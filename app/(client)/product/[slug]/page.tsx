import React from "react";
import { getProductBySlug } from "@/sanity/helpers";
import Container from "@/components/Container";
import ProductDetails from "@/components/ProductDetails";

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <Container>
      <ProductDetails product={product} />
    </Container>
  );
}
