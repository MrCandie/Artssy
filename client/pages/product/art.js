import React, { Fragment, useContext } from "react";
import { CartContext } from "../../CartContext";
import Header from "../../components/Homepage/Header/Header";
import Art from "../../components/ProductPage/sort/art";
import { storeData } from "../../Store";

export default function Arts({ product }) {
  const cart = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Fragment>
      <Header quantity={quantity} />
      <Art product={product} />;
    </Fragment>
  );
}

export async function getStaticProps() {
  const product = await storeData();
  const artProducts = product.filter((data) => data.type === "art");

  return {
    props: {
      product: artProducts,
    },
  };
}
