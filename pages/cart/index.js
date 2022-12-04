import React from "react";
import Cart from "../../components/cart/Cart";
import { storeData } from "../../Store";

export default function Carts({ product }) {
  return <Cart product={product} />;
}

export async function getStaticProps() {
  const products = await storeData();

  return {
    props: {
      product: products,
    },
  };
}
