import React, { Fragment } from "react";

import CartProduct from "./CartProduct";

export default function CartItem({ id, quantity }) {
  return (
    <Fragment>
      <CartProduct quantity={quantity} id={id} />
    </Fragment>
  );
}
