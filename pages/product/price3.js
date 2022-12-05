import React, { Fragment, useContext } from "react";
import { CartContext } from "../../CartContext";
import Header from "../../components/Homepage/Header/Header";
import AboveTwohundred from "../../components/ProductPage/sort/aboveTwohundred";
import { storeData } from "../../Store";

export default function Price3({ product }) {
  const cart = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Fragment>
      <Header quantity={quantity} />
      <AboveTwohundred product={product} />;
    </Fragment>
  );
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
