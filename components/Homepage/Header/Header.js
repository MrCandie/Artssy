import classes from "./header.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { CartContext } from "../../../CartContext";

import React, { Fragment, useContext, useState } from "react";
import Link from "next/link";

export default function Header() {
  const cart = useContext(CartContext);

  const quantity = "";

  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className={classes.header}>
      <span onClick={() => setOpenMenu(true)} className={classes.menu}>
        <AiOutlineMenu />
      </span>
      <div className={classes.logo}>
        <Link href="/">ARTSY</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/product">Marketplace</Link>
          </li>
          <li>
            <Link href="/auction">Auction</Link>
          </li>
          <li>
            <Link href="/drop">Drop</Link>
          </li>
        </ul>
      </nav>
      <div className={classes.icons}>
        <span>
          <AiOutlineSearch />
        </span>
        <Link href="/cart">
          <span>
            <AiOutlineShoppingCart />
            <span className={classes.qty}>{quantity}</span>
          </span>
        </Link>
        <span>
          <BsBell />
        </span>
      </div>
      {openMenu && (
        <Fragment>
          <div onClick={() => setOpenMenu(false)} className="overlay"></div>
          <div className={classes.navbar}>
            <span onClick={() => setOpenMenu(false)}>
              <MdCancel />
            </span>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/product">Marketplace</Link>
              </li>
              <li>
                <Link href="/auction">Auction</Link>
              </li>
              <li>
                <Link href="/drop">Drop</Link>
              </li>
            </ul>
          </div>
        </Fragment>
      )}
      <div className={classes.smallIcon}>
        <span>
          <AiOutlineSearch />
        </span>
        <Link href="/cart">
          <span>
            <AiOutlineShoppingCart />
            <span className={classes.qty}>{quantity}</span>
          </span>
        </Link>
      </div>
    </header>
  );
}
