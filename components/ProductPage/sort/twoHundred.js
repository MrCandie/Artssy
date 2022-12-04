import React from "react";
import { twoHundredRange } from "../../../Store";
import classes from "../product.module.css";
import ProductItem from "../productItem";

export default function TwoHundred({ product }) {
  return (
    <section className={classes.fashion}>
      <h1>$150 - $200</h1>
      <ul className={classes.list}>
        <ProductItem products={product} />
      </ul>
    </section>
  );
}
