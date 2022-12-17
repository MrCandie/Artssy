import Link from "next/link";
import classes from "./footer.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <h1>ARTSY</h1>
        <div className={classes.mobile}>
          <div className={classes.menu}>
            <Link href="/">Home</Link>
            <Link href="/product">Marketplace</Link>
            <Link href="/auction">Auctions</Link>
            <Link href="/drop">Drops</Link>
          </div>
          <div className={classes.menu}>
            <Link href="">Blog</Link>
            <Link href="">Rates</Link>
            <Link href="">Wallet</Link>
            <Link href="">High Bids</Link>
          </div>
        </div>
        <div className={classes.social}>
          <Link href="">
            <span>
              <AiOutlineMail />
            </span>
            artsystudios@gmail.com
          </Link>
          <Link href="">
            <span>
              <GoLocation />
            </span>
            Lagos, Nigeria.
          </Link>
        </div>
      </div>
      <div className={classes.foot}>
        Artsystudios © 2022. All Rights Reserved.
      </div>
    </footer>
  );
}
