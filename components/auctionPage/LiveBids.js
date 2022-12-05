import classes from "./auction.module.css";
import { IoIosSend } from "react-icons/io";
import { Fragment } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

export default function LiveBids({ data, bid }) {
  return (
    <Fragment>
      <section className={classes.live}>
        <div className={classes.livebid}>
          <div className={classes.image}>
            <div className={classes.black}></div>
            <img src={data.image} />
          </div>
          <div className={classes.current}>
            <h1>Current bid {data.currentBid}ETH</h1>
            <p>Tag: Lost or Wither</p>
          </div>
          <h2 className={classes.h2}>live</h2>
        </div>
        <div className={classes.viewer}>
          <div className={classes.view}>
            {bid.map((bids) => (
              <div className={classes.views}>
                <div className={classes.img}>
                  <img src={bids.image} />
                </div>
                <div className={classes.content}>
                  <p>{bids.name}</p>
                  <p>{bids.bid}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={classes.form}>
            <h1>Creator : {data.creator}</h1>
            <form>
              <div>
                <input placeholder="place a bid" />
                <button>
                  <IoIosSend />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div className={classes.upcoming}>
        <h1>See upcoming drops</h1>
        <Link href="/drop">
          <span>
            <AiOutlineArrowRight />
          </span>
        </Link>
      </div>
    </Fragment>
  );
}
