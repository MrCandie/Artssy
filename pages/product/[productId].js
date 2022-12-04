import { useRouter } from "next/router";
import React, { Fragment } from "react";
import ProductDetail from "../../components/ProductPage/ProductDetails";
import { getProduct } from "../../Store";

export default function ProductDetails() {
  const router = useRouter();

  const id = router.query.productId;
  const product = getProduct(id);

  return <ProductDetail product={product} />;
}
