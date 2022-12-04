import React from "react";
import Nature from "../../components/ProductPage/sort/nature";
import { storeData } from "../../Store";

export default function Natures({ product }) {
  return <Nature product={product} />;
}

export async function getStaticProps() {
  const product = await storeData();
  const natureProducts = product.filter((data) => data.type === "nature");

  return {
    props: {
      product: natureProducts,
    },
  };
}
