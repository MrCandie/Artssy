import React from "react";
import Art from "../../components/ProductPage/sort/art";
import { storeData } from "../../Store";

export default function Arts({ product }) {
  return <Art product={product} />;
}

export async function getStaticProps() {
  const product = await storeData();
  const artProducts = product.filter((data) => data.type === "art");

  return {
    props: {
      product: artProducts,
    },
  };
}
