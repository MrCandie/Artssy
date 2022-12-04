import React from "react";
import AboveTwohundred from "../../components/ProductPage/sort/aboveTwohundred";
import { storeData } from "../../Store";

export default function Price3({ product }) {
  return <AboveTwohundred product={product} />;
}

export async function getStaticProps() {
  const products = await storeData();
  const product = products.filter((data) => data.price > 200);

  return {
    props: {
      product,
    },
  };
}
