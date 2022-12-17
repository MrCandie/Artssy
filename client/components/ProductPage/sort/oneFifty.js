import React from "react";
import { oneFiftyRange } from "../../../Store";
import classes from "../product.module.css";
import ProductItem from "../productItem";

export default function OneFifty({ product }) {
  // const product = oneFiftyRange();
  return (
    <section className={classes.fashion}>
      <h1>$100 - $150</h1>
      <ul className={classes.list}>
        <ProductItem products={product} />
      </ul>
    </section>
  );
}
