import React from "react";
import { getProductBySlug } from "@/sanity/helpers";
import Container from "@/components/Container";
import ProductDetails from "@/components/ProductDetails";

interface Params {
  slug: string;
}

export default async function ProductPage(context: { params: Params }) {
  const { params } = context; // Destructure params here

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
