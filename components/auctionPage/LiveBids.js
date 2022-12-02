import classes from "./auction.module.css";
import { IoIosSend } from "react-icons/io";
import { Fragment } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

export default function LiveBids() {
  return (
    <Fragment>
      <section className={classes.live}>
        <div className={classes.livebid}>
          <div className={classes.image}>
            <img src="/images/artsy2.avif" />
          </div>
          <div className={classes.current}>
            <h1>Current bid $4500</h1>
            <p>Tag: Lost or Wither</p>
          </div>
          <h2 className={classes.h2}>live</h2>
        </div>
        <div className={classes.viewer}>
          <div className={classes.view}>
            <div className={classes.views}>
              <div className={classes.img}>
                <img src="/images/artsy1.avif" />
              </div>
              <div className={classes.content}>
                <p>Ella Flynn</p>
                <p>Tight Bid</p>
              </div>
            </div>
            <div className={classes.views}>
              <div className={classes.img}>
                <img src="/images/artsy2.avif" />
              </div>
              <div className={classes.content}>
                <p>Ella Flynn</p>
                <p>Tight Bid</p>
              </div>
            </div>
            <div className={classes.views}>
              <div className={classes.img}>
                <img src="/images/artsy3.avif" />
              </div>
              <div className={classes.content}>
                <p>Ella Flynn</p>
                <p>Tight Bid</p>
              </div>
            </div>
            <div className={classes.views}>
              <div className={classes.img}>
                <img src="/images/artsy1.avif" />
              </div>
              <div className={classes.content}>
                <p>Ella Flynn</p>
                <p>Tight Bid</p>
              </div>
            </div>
            <div className={classes.views}>
              <div className={classes.img}>
                <img src="/images/artsy1.avif" />
              </div>
              <div className={classes.content}>
                <p>Ella Flynn</p>
                <p>Tight Bid</p>
              </div>
            </div>
            <div className={classes.views}>
              <div className={classes.img}>
                <img src="/images/artsy1.avif" />
              </div>
              <div className={classes.content}>
                <p>Ella Flynn</p>
                <p>Tight Bid</p>
              </div>
            </div>
          </div>
          <div className={classes.form}>
            <h1>Creator : Stormi Rylie</h1>
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
