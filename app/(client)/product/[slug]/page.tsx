import React from "react";
import { getProductBySlug } from "@/sanity/helpers";
import Container from "@/components/Container";
import ProductDetails from "@/components/ProductDetails";

// Fixing the type definition for params
interface Params {
  slug: string;
}

interface ProductPageProps {
  params: Params;
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <Container>
      <ProductDetails product={product} />
    </Container>
  );
};

export default ProductPage;
