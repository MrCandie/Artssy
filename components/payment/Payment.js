import { useContext, useRef, useState } from "react";
import { CartContext } from "../../CartContext";
import classes from "./payment.module.css";
import { useRouter } from "next/router";
// import { PaystackButton } from "react-paystack";
// import PaystackPop from "@paystack/inline-js";

export default function Payment() {
  const router = useRouter();
  const cart = useContext(CartContext);
  const publicKey = "pk_test_a1f3bf6699a85775a216847f8327c16082e12b1e";
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function setAmountHandler() {
    setAmount(cart.getTotalCost().toFixed(2));
  }

  // const config = {
  //   email,
  //   amount,
  //   publicKey,
  // };

  // const componentProps = {
  //   ...config,
  //   metadata: {
  //     name,
  //     phone,
  //   },
  //   publicKey,
  //   text: "Proceed",
  //   onSuccess: ({ reference }) =>
  //     alert(`Payment complete!! Transaction reference: ${reference}`),
  //   onClose: () => alert("You Have Cancelled  a transaction"),
  // };

  // console.log(PaystackButton);
  //   e.preventDefault();
  // function paymentHandler(e) {
  //   e.preventDefault();
  //   const paystack = new PaystackPop();
  //   paystack.newTransaction({
  //     key: "pk_test_a1f3bf6699a85775a216847f8327c16082e12b1e",
  //     amount: amount * 100,
  //     email: email,
  //     name: name,
  //     onSuccess(transaction) {
  //       let message = `Payment Complete! Reference ID: ${transaction.reference}`;
  //       alert(message);
  //       router.replace("/success");
  //     },
  //     onCancel() {
  //       alert("You Have Cancelled  a transaction");
  //     },
  //   });
  // }

  return (
    <section className={classes.payment}>
      <h1>Proceed to payment</h1>
      <form className={classes.form} id="paymentForm">
        <div className={classes.formDetail}>
          <label htmlFor="email">Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email-address"
          />
        </div>
        <div className={classes.formDetail}>
          <label htmlFor="amount">Amount</label>
          <input
            onChange={setAmountHandler}
            value={amount * 750}
            type="number"
            id="amount"
          />
        </div>
        <div className={classes.formDetail}>
          <label htmlFor="amount">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="amount"
          />
        </div>
        <div className={classes.formDetail}>
          <label htmlFor="amount">Phone Number</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            id="amount"
          />
        </div>
        <button>Proceed</button>
      </form>
    </section>
  );
}
