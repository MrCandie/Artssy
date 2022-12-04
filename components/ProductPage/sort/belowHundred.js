import React from "react";
import { hundredRange } from "../../../Store";
import classes from "../product.module.css";
import ProductItem from "../productItem";

export default function BelowHundred({ product }) {
  // const product = hundredRange();

  return (
    <section className={classes.fashion}>
      <h1>Below $100</h1>
      <ul className={classes.list}>
        <ProductItem products={product} />
      </ul>
    </section>
  );
}
