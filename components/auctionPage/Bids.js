import Link from "next/link";
import classes from "./auction.module.css";
import { AiOutlineHeart } from "react-icons/ai";

export default function Bids() {
  return (
    <section className={classes.bid}>
      <h2>Top bids from popular creators</h2>
      <div className={classes.bids}>
        <div className={classes.details}>
          <div className={classes.detail}>
            <span>
              <AiOutlineHeart />
            </span>
            <img src="/images/auction1.avif" />
            <h1>Out of the box</h1>
          </div>
          <div className={classes.creator}>
            <h1>Creator: Dan Murray</h1>
            <h1>Date: 12/08/22</h1>
            <h1>Highest bid: 0.57eth</h1>
          </div>
          <div className={classes.price}>
            <div className={classes.eth}>
              <h1>current bid</h1>
              <h1>0.987 ETH</h1>
            </div>
            <Link href="/bids">place bid</Link>
          </div>
        </div>
        <div className={classes.details}>
          <div className={classes.detail}>
            <span>
              <AiOutlineHeart />
            </span>
            <img src="/images/auction3.avif" />
            <h1>Out of the box</h1>
          </div>
          <div className={classes.creator}>
            <h1>Creator: Jacob Banks</h1>
            <h1>Date: 12/08/22</h1>
            <h1>Highest bid: 0.34ETH</h1>
          </div>
          <div className={classes.price}>
            <div className={classes.eth}>
              <h1>current bid</h1>
              <h1>0.99 ETH</h1>
            </div>
            <Link href="/bids">place bid</Link>
          </div>
        </div>

        <div className={classes.details}>
          <div className={classes.detail}>
            <span>
              <AiOutlineHeart />
            </span>
            <img src="/images/auction4.avif" />
            <h1>Out of the box</h1>
          </div>
          <div className={classes.creator}>
            <h1>Creator: Mr Candie</h1>
            <h1>Date: 12/08/22</h1>
            <h1>Highest bid: 0.34ETH</h1>
          </div>
          <div className={classes.price}>
            <div className={classes.eth}>
              <h1>current bid</h1>
              <h1>0.99 ETH</h1>
            </div>
            <Link href="/bids">place bid</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
