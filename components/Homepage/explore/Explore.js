import classes from "./explore.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Explore() {
  return (
    <section className={classes.section}>
      <hr />
      <div className={classes.explore}>
        <h1>Explore marketplace</h1>
        <span>
          <AiOutlineArrowRight />
        </span>
      </div>
      <hr />
      <div className={classes.explore}>
        <h1>See auctions</h1>
        <span>
          <AiOutlineArrowRight />
        </span>
      </div>
      <hr />
    </section>
  );
}
