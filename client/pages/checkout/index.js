import React, { Fragment, useContext } from "react";
import { CartContext } from "../../CartContext";
import Checkout from "../../components/cart/Checkout";
import Header from "../../components/Homepage/Header/Header";

export default function Checkouts() {
  const cart = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Fragment>
      <Header quantity={quantity} />
      <Checkout />
    </Fragment>
  );
}
