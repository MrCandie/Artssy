import classes from "./success.module.css";
import { AiFillCheckCircle } from "react-icons/ai";
import Link from "next/link";

export default function Success() {
  return (
    <section className={classes.section}>
      <span>
        <AiFillCheckCircle />
      </span>
      <h1>Hey, thank you for your purchase. </h1>
      <h1>You are amazing. Cheers to being ARTSY!</h1>
      <Link href="/">Back to home</Link>
    </section>
  );
}
