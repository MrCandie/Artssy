import React from "react";
import TwoHundred from "../../components/ProductPage/sort/twoHundred";
import { storeData } from "../../Store";

export default function Price2({ product }) {
  return <TwoHundred product={product} />;
}

export async function getStaticProps() {
  const products = await storeData();
  const product = products.filter(
    (data) => data.price >= 150 && data.price <= 200
  );

  return {
    props: {
      product,
    },
  };
}
