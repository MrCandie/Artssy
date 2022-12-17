import React, { Fragment, useContext } from "react";
import { CartContext } from "../../CartContext";
import Drop from "../../components/dropsPage/Drop";
import Header from "../../components/Homepage/Header/Header";

export default function Drops() {
  const cart = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Fragment>
      <Header quantity={quantity} />
      <Drop />
    </Fragment>
  );
}
