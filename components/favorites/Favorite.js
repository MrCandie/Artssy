import { useContext } from "react";
import classes from "../ProductPage/product.module.css";
import { CartContext } from "../../CartContext";
import ProductItem from "../ProductPage/productItem";
import Link from "next/link";

export default function Favorite({ data }) {
  const favoriteCtx = useContext(CartContext);
  const favIds = favoriteCtx.ids.map((item) => item.id);

  const favoriteProds = data.filter((meal) => favIds.includes(meal.id));

  return (
    <section className={classes.section}>
      <h1>Favorites</h1>
      {favoriteProds.length > 0 ? (
        <div className={classes.body}>
          <ul className={classes.list}>
            <ProductItem products={favoriteProds} />
          </ul>
        </div>
      ) : (
        <div className="center">
          <div className="img">
            <img src="/images/box.svg" />
          </div>
          <Link href="product">Go to store</Link>
        </div>
      )}
    </section>
  );
}
