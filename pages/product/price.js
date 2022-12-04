import React from "react";
import BelowHundred from "../../components/ProductPage/sort/belowHundred";
import { storeData } from "../../Store";

export default function Price({ product }) {
  return <BelowHundred product={product} />;
}

export async function getStaticProps() {
  const products = await storeData();
  const product = products.filter((data) => data.price <= 100);

  return {
    props: {
      product,
    },
  };
}
