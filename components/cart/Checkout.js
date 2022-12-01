import { useRouter } from "next/router";
import { useRef, useState } from "react";
import classes from "./cart.module.css";
import Spinner from "../spinner/spinner";

export default function Checkout() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const emailRef = useRef();
  const checkedRef = useRef();
  const nameRef = useRef();
  const cityRef = useRef();
  const countryRef = useRef();
  const postalCodeRef = useRef();
  const numberRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    const enteredName = nameRef.current.value;
    const checked = checkedRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredCity = cityRef.current.value;
    const enteredCountry = countryRef.current.value;
    const enteredPostalCode = postalCodeRef.current.value;
    const enteredNumber = numberRef.current.value;

    const userData = {
      name: enteredName,
      email: enteredEmail,
      checked: checked,
      city: enteredCity,
      country: enteredCountry,
      postalCode: enteredPostalCode,
      number: enteredNumber,
    };

    setLoading(true);
    fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setLoading(false);
        if (res.ok) {
          router.replace("/payment");
        }
        return res.json();
      })
      .then((data) => alert(data.message));
  }

  return (
    <section className={classes.section}>
      <h1 className={classes.h1}>Shipping Details</h1>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.field}>
          <label>Your email</label>
          <input ref={emailRef} type="email" placeholder="test@gmail.com" />
        </div>
        <div className={classes.checkbox}>
          <input ref={checkedRef} type="checkbox" />
          <label>Get updates about new and exclusive products</label>
        </div>
        <div className={classes.field}>
          <label>Full name</label>
          <input ref={nameRef} type="text" />
        </div>
        <div className={classes.field}>
          <label>city</label>
          <input ref={cityRef} type="text" />
        </div>
        <div className={classes.inputContainer}>
          <div className={classes.field}>
            <label>country</label>
            <select ref={countryRef}>
              <option value="nigeria">Nigeria</option>
            </select>
          </div>
          <div className={classes.field}>
            <label>postal code</label>
            <input type="text" ref={postalCodeRef} />
          </div>
        </div>
        <div className={classes.field}>
          <label>phone number</label>
          <input ref={numberRef} type="tel" />
        </div>
        <button>Proceed to payment</button>
      </form>
      {loading && <Spinner />}
    </section>
  );
}
