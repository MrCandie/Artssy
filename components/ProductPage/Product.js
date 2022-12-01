import { allProducts } from "../../Store";
import classes from "./product.module.css";
import ProductFilter from "./ProductFilter";

import ProductHeader from "./ProductHeader";
import ProductItem from "./productItem";

export default function Product() {
  const products = allProducts();

  return (
    <section>
      <ProductHeader />
      <div className={classes.body}>
        <ProductFilter />
        <ul className={classes.list}>
          <ProductItem products={products} />
        </ul>
      </div>
    </section>
  );
}
