import React, { Fragment } from "react";

import CartProduct from "./CartProduct";

export default function CartItem({ id, quantity, product }) {
  return (
    <Fragment>
      <CartProduct product={product} quantity={quantity} id={id} />
    </Fragment>
  );
}
