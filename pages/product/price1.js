import React from "react";
import OneFifty from "../../components/ProductPage/sort/oneFifty";
import { storeData } from "../../Store";

export default function price1({ product }) {
  return <OneFifty product={product} />;
}

export async function getStaticProps() {
  const products = await storeData();
  const product = products.filter(
    (data) => data.price >= 100 && data.price <= 150
  );

  return {
    props: {
      product,
    },
  };
}
