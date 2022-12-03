import React from "react";
import { getArt } from "../../../Store";
import ProductItem from "../productItem";
import classes from "../product.module.css";

export default function Art() {
  const product = getArt();
  return (
    <section className={classes.fashion}>
      <h1>Art & Museum</h1>
      <ul className={classes.list}>
        <ProductItem products={product} />
      </ul>
    </section>
  );
}
