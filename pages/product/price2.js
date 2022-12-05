import React, { Fragment, useContext } from "react";
import { CartContext } from "../../CartContext";
import Header from "../../components/Homepage/Header/Header";
import TwoHundred from "../../components/ProductPage/sort/twoHundred";
import { storeData } from "../../Store";

export default function Price2({ product }) {
  const cart = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Fragment>
      <Header quantity={quantity} />
      <TwoHundred product={product} />;
    </Fragment>
  );
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
