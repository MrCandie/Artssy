import React, { Fragment, useContext } from "react";
import { CartContext } from "../../CartContext";
import Header from "../../components/Homepage/Header/Header";
import BelowHundred from "../../components/ProductPage/sort/belowHundred";
import { storeData } from "../../Store";

export default function Price({ product }) {
  const cart = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Fragment>
      <Header quantity={quantity} />
      <BelowHundred product={product} />;
    </Fragment>
  );
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
