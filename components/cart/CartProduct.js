import React, { useContext } from "react";
import { getProduct } from "../../Store";
import classes from "./cart.module.css";
import { AiOutlineMinus } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import { CartContext } from "../../CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CartProduct({ id, quantity }) {
  const cart = useContext(CartContext);
  const product = getProduct(id);

  function addToCartHandler() {
    toast.success("One item added to cart", {
      closeOnClick: true,
    });
    cart.addOneToCart(id);
  }

  function removeFromCartHandler() {
    toast.success("One item removed from cart", {
      closeOnClick: true,
    });
    cart.removeOneFromCart(id);
  }

  function deleteCartHandler() {
    toast.success("cart item deleted", {
      closeOnClick: true,
    });
    cart.deleteFromCart(id);
  }

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
              <span onClick={removeFromCartHandler}>
                <AiOutlineMinus />
              </span>
              <span>{quantity}</span>
              <span onClick={addToCartHandler}>
                <GrAdd />
              </span>
            </div>
          </div>
        </div>
        <div className={classes.cost}>
          <span onClick={deleteCartHandler}>
            <AiFillCloseCircle />
          </span>
          <h1>${product.price}</h1>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={5000} />
    </section>
  );
}
