import React from "react";
import { getFashion } from "../../../Store";
import ProductItem from "../productItem";
import classes from "../product.module.css";

export default function Fashion() {
  const product = getFashion();

  return (
    <section className={classes.fashion}>
      <h1>Fashion</h1>
      <ul className={classes.list}>
        <ProductItem products={product} />
      </ul>
    </section>
  );
}
