import React, { Fragment, useContext } from "react";
import { CartContext } from "../../CartContext";
import Cart from "../../components/cart/Cart";
import Header from "../../components/Homepage/Header/Header";
import { storeData } from "../../Store";

export default function Carts({ product }) {
  const cart = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Fragment>
      <Header quantity={quantity} />
      <Cart product={product} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const products = await storeData();

  return {
    props: {
      product: products,
    },
  };
}
