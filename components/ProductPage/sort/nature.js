import React from "react";
import { getNature } from "../../../Store";
import ProductItem from "../productItem";
import classes from "../product.module.css";

export default function Nature({ product }) {
  // const product = getNature();
  return (
    <section className={classes.fashion}>
      <h1>Nature</h1>
      <ul className={classes.list}>
        <ProductItem products={product} />
      </ul>
    </section>
  );
}
