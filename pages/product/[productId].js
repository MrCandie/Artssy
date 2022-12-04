import { useRouter } from "next/router";
import React, { Fragment } from "react";
import ProductDetail from "../../components/ProductPage/ProductDetails";
import { getProduct, storeData } from "../../Store";

export default function ProductDetails({ product, data }) {
  const router = useRouter();
  // const id = router.query.productId;
  return <ProductDetail allProduct={data} product={product} />;
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.productId;
  const data = await storeData();

  const product = data.find((prod) => prod.id === productId);

  return {
    props: {
      product,
      data,
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { productId: "p1" } },
      { params: { productId: "p2" } },
      { params: { productId: "p3" } },
      { params: { productId: "p4" } },
      { params: { productId: "p5" } },
      { params: { productId: "p6" } },
      { params: { productId: "p7" } },
      { params: { productId: "p8" } },
      { params: { productId: "p9" } },
    ],
    fallback: false,
  };
}
