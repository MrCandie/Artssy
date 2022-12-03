import classes from "./auction.module.css";
import React from "react";
import Link from "next/link";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";

export default function Auction() {
  return (
    <section className={classes.section}>
      <h1>see upcoming auctions and exhibitions</h1>
      <div className={classes.container}>
        <div className={classes.body}>
          <div className={classes.number}>
            <h1>01</h1>
          </div>
          <div className={classes.content}>
            <h2>Monalisa Refined in style</h2>
            <p>start on 08:00 GTS monday</p>
            <p>
              get exclusive view of comtemporary art and connect with investors
              and auctioneers across the world bringing their highest and lowest
              bids
            </p>
          </div>
          <div className={classes.button}>
            <div className={classes.more}>
              <Link href="/auction">See more</Link>
            </div>
            <div className={classes.remainder}>
              <Link href="">Set a remainder</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.move}>
        <span>
          <FaLessThan />
        </span>
        <span>
          <FaGreaterThan />
        </span>
      </div>
    </section>
  );
}
