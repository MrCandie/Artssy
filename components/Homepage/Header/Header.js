import classes from "./header.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { MdCancel } from "react-icons/md";

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
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
            <Link href="">Auction</Link>
          </li>
          <li>
            <Link href="">Drop</Link>
          </li>
        </ul>
      </nav>
      <div className={classes.icons}>
        <span>
          <AiOutlineSearch />
        </span>
        <span>
          <AiOutlineShoppingCart />
        </span>
        <span>
          <BsBell />
        </span>
      </div>
      {openMenu && (
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
              <Link href="">Auction</Link>
            </li>

            <li>
              <Link href="">Drop</Link>
            </li>
          </ul>
        </div>
      )}
      <div className={classes.smallIcon}>
        <span>
          <AiOutlineSearch />
        </span>
        <span>
          <AiOutlineShoppingCart />
        </span>
      </div>
    </header>
  );
}
