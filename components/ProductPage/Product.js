import { allProducts, storeData } from "../../Store";
import classes from "./product.module.css";
import ProductFilter from "./ProductFilter";

import ProductHeader from "./ProductHeader";
import ProductItem from "./productItem";

export default function Product({ store }) {
  return (
    <section>
      <ProductHeader />
      <div className={classes.body}>
        <ProductFilter />
        <ul className={classes.list}>
          <ProductItem products={store} />
        </ul>
      </div>
    </section>
  );
}
