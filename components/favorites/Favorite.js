import { useContext } from "react";
import classes from "../ProductPage/product.module.css";
import { CartContext } from "../../CartContext";
import { DUMMY_DATA } from "../../Store";
import ProductItem from "../ProductPage/productItem";

export default function Favorite() {
  const favoriteCtx = useContext(CartContext);
  const favoriteProducts = DUMMY_DATA.filter((item) =>
    favoriteCtx.ids.includes(item.id)
  );
  return (
    <section className={classes.section}>
      <h1>Favorites</h1>
      <div className={classes.body}>
        <ul className={classes.list}>
          <ProductItem products={favoriteProducts} />
        </ul>
      </div>
    </section>
  );
}
