import React from "react";
import Fashion from "../../components/ProductPage/sort/fashion";
import { storeData } from "../../Store";

export default function Fashions({ product }) {
  return <Fashion product={product} />;
}

export async function getStaticProps() {
  const product = await storeData();
  const fashionProducts = product.filter((data) => data.type === "fashion");

  return {
    props: {
      product: fashionProducts,
    },
  };
}
