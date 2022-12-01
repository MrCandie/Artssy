import { useContext, useRef, useState } from "react";
import { CartContext } from "../../CartContext";
import classes from "./payment.module.css";
import PaystackPop from "@paystack/inline-js";
import { useRouter } from "next/router";

export default function Payment() {
  const router = useRouter();
  const cart = useContext(CartContext);
  const [amount, setAmount] = useState("");
  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const amountRef = useRef();

  function paymentSubmitHandler(e) {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredAmount = amountRef.current.value;
    const enteredFirstName = firstNameRef.current.value;
    const enteredLastName = lastNameRef.current.value;

    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_a1f3bf6699a85775a216847f8327c16082e12b1e",
      amount: enteredAmount * 100,
      email: enteredEmail,
      firstName: enteredFirstName,
      lastName: enteredLastName,
      onSuccess(transaction) {
        let message = `Payment Complete! Reference ID: ${transaction.reference}`;
        alert(message);
      },
      onCancel() {
        alert("You Have Cancelled  a transaction");
      },
      callback: function (response) {
        router.replace("/success");
      },
    });
  }

  function setAmountHandler() {
    setAmount(cart.getTotalCost().toFixed(2));
  }
  return (
    <section className={classes.payment}>
      <h1>Proceed to payment</h1>
      <form
        className={classes.form}
        onSubmit={paymentSubmitHandler}
        id="paymentForm"
      >
        <div className={classes.formDetail}>
          <label htmlFor="email">Email Address</label>
          <input ref={emailRef} type="email" id="email-address" />
        </div>
        <div className={classes.formDetail}>
          <label htmlFor="amount">Amount</label>
          <input
            onChange={setAmountHandler}
            value={amount * 750}
            type="number"
            id="amount"
            ref={amountRef}
          />
        </div>
        <div className={classes.formDetail}>
          <label htmlFor="first-name">First Name</label>
          <input ref={firstNameRef} type="text" id="first-name" />
        </div>
        <div className={classes.formDetail}>
          <label htmlFor="last-name">Last Name</label>
          <input ref={lastNameRef} type="text" id="last-name" />
        </div>
        <div className="form-submit">
          <button type="submit">Pay</button>
        </div>
      </form>
    </section>
  );
}
