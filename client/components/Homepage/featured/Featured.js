import classes from "./featured.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

export default function Featured() {
  return (
    <section className={classes.section}>
      <h2>Featured Products</h2>
      <div className={classes.container}>
        <hr />
        <div className={classes.product}>
          <div className={classes.black}></div>
          <div className={classes.image}>
            <img src="/images/featured1.avif" />
          </div>
          <div className={classes.content}>
            <h1>The Boolean Egyptian</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi
            </p>
            <div className={classes.creator}>
              <div className={classes.creators}>
                <img src="/images/featured2.avif" />
                <img src="/images/featured2.avif" />
                <img src="/images/featured2.avif" />
                <img src="/images/featured2.avif" />
                <img src="/images/featured2.avif" />
              </div>
              <p>64 major creators</p>
              <Link href="/product">
                <span className={classes.arrow}>
                  <AiOutlineArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <hr />

        <div className={classes.product1}>
          <div className={classes.black}></div>
          <div className={classes.image}>
            <img src="/images/featured3.avif" />
          </div>
          <div className={classes.content}>
            <h1>The Boolean Egyptian</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi
            </p>
            <div className={classes.creator}>
              <div className={classes.creators}>
                <img src="/images/featured3.avif" />
                <img src="/images/featured3.avif" />
                <img src="/images/featured3.avif" />
                <img src="/images/featured3.avif" />
                <img src="/images/featured3.avif" />
              </div>
              <p>64 major creators</p>
              <Link href="/product">
                <span className={classes.arrow}>
                  <AiOutlineArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <hr />
        <div className={classes.product}>
          <div className={classes.black}></div>
          <div className={classes.image}>
            <img src="/images/featured4.avif" />
          </div>
          <div className={classes.content}>
            <h1>The Boolean Egyptian</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi
            </p>
            <div className={classes.creator}>
              <div className={classes.creators}>
                <img src="/images/featured4.avif" />
                <img src="/images/featured4.avif" />
                <img src="/images/featured4.avif" />
                <img src="/images/featured4.avif" />
                <img src="/images/featured4.avif" />
              </div>
              <p>64 major creators</p>
              <Link href="/product">
                <span className={classes.arrow}>
                  <AiOutlineArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
}
