import React from "react";
import { aboveTwoHundred } from "../../../Store";
import classes from "../product.module.css";
import ProductItem from "../productItem";

export default function AboveTwohundred({ product }) {
  // const product = aboveTwoHundred();
  return (
    <section className={classes.fashion}>
      <h1>Above $200</h1>
      <ul className={classes.list}>
        <ProductItem products={product} />
      </ul>
    </section>
  );
}
