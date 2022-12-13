import React, { Fragment, useContext } from "react";
import { CartContext } from "../../CartContext";
import Header from "../../components/Homepage/Header/Header";
import Search from "../../components/search/Search";

export default function Index() {
  const cart = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Fragment>
      <Header quantity={quantity} />
      <Search />
    </Fragment>
  );
}
