import Link from "next/link";
import { Fragment, useContext } from "react";
import { CartContext } from "../../CartContext";
import classes from "./cart.module.css";
import CartItem from "./CartItem";

export default function Cart() {
  const cart = useContext(CartContext);
  const totalCost = cart.getTotalCost().toFixed(2);

  const shippingFee = (totalCost * 0.07).toFixed(2);
  const quantity = cart.items.map((item) => item.quantity);

  return (
    <section className={classes.section}>
      <h1 className={classes.h1}>Shopping Cart</h1>
      {quantity > 0 ? (
        <Fragment>
          {cart.items.map((item) => (
            <CartItem id={item.id} quantity={item.quantity} />
          ))}
        </Fragment>
      ) : (
        <div className="center">
          <p>Your Cart is Currently empty!</p>
          <Link href="product">Go to store</Link>
        </div>
      )}

      {quantity > 0 && (
        <div className={classes.check}>
          <div className={classes.checkout}>
            <div className={classes.proceed}>
              <Link href="/checkout">Proceed to checkout</Link>
            </div>
            <div className={classes.shop}>
              <Link href="/product">Continue shopping</Link>
            </div>
          </div>
          <div className={classes.shipping}>
            <p>
              Product in cart: <span>{quantity}</span>
            </p>
            <p>
              shipping: <span>${shippingFee}</span>
            </p>
            <p>
              total cost: <span>${totalCost}</span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
