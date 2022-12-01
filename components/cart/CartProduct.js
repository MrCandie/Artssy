import React, { useContext } from "react";
import { getProduct } from "../../Store";
import classes from "./cart.module.css";
import { AiOutlineMinus } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import { CartContext } from "../../CartContext";

export default function CartProduct({ id, quantity }) {
  const cart = useContext(CartContext);
  const product = getProduct(id);

  return (
    <section className={classes.cart}>
      <hr />
      <div className={classes.container}>
        <div className={classes.body}>
          <div className={classes.image}>
            <img src={`../../${product.image}`} />
          </div>
          <div>
            <h2>{product.name}</h2>
            <h1>clearamane</h1>
            <h1>Size: 200ft</h1>
            <div className={classes.buttons}>
              <span onClick={() => cart.removeOneFromCart(id)}>
                <AiOutlineMinus />
              </span>
              <span>{quantity}</span>
              <span onClick={() => cart.addOneToCart(id)}>
                <GrAdd />
              </span>
            </div>
          </div>
        </div>
        <div className={classes.cost}>
          <span onClick={() => cart.deleteFromCart(id)}>
            <AiFillCloseCircle />
          </span>
          <h1>${product.price}</h1>
        </div>
      </div>
    </section>
  );
}
