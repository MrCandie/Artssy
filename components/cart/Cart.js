import Link from "next/link";
import { Fragment, useContext, useEffect } from "react";
import { CartContext } from "../../CartContext";
import { getCartData } from "../../Store";
import classes from "./cart.module.css";
import CartItem from "./CartItem";

export default function Cart({ product }) {
  const cart = useContext(CartContext);
  const totalCost = cart.getTotalCost().toFixed(2);

  const shippingFee = (totalCost * 0.07).toFixed(2);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    async function fetchCart() {
      const data = await getCartData();
      cart.setCartItem(data);
    }
    fetchCart();
  }, [cart, quantity]);

  return (
    <section className={classes.section}>
      <h1 className={classes.h1}>Shopping Cart</h1>
      {quantity > 0 ? (
        <Fragment>
          {cart.items.map((item) => (
            <CartItem product={product} id={item.id} quantity={item.quantity} />
          ))}
        </Fragment>
      ) : (
        <div className="center">
          <div className="img">
            <img src="/images/empty.svg" />
          </div>
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
              total cost: <span>${(+totalCost + +shippingFee).toFixed(2)}</span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
