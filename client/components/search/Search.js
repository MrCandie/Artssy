import React, { Fragment, useRef, useState } from "react";
import { storeData } from "../../Store";
import style from "./search.module.css";
import classes from "../ProductPage/product.module.css";
import ProductItem from "../ProductPage/productItem";

export default function Search() {
  const searchRef = useRef();
  const [searchData, setSearchData] = useState([]);
  const [show, setShow] = useState(true);

  async function submitHandler(e) {
    e.preventDefault();
    const enteredSearch = searchRef.current.value;
    setShow(false);
    if (!enteredSearch) {
      return;
    }
    const data = await storeData();

    const searchItem = data.filter((item) =>
      item.name.includes(enteredSearch.trim().toLowerCase())
    );
    setSearchData(searchItem);
    searchRef.current.value = "";
  }
  return (
    <Fragment>
      <section className={style.section}>
        <h1>Search for a product</h1>
        <div className={style.container}>
          <form onSubmit={submitHandler}>
            <input
              ref={searchRef}
              type="search"
              placeholder="Search for your favorite products"
            />
          </form>
        </div>
        {show && (
          <div className={style.search}>
            <img src="/images/search.svg" />
          </div>
        )}
      </section>
      <ul className={classes.list}>
        <ProductItem products={searchData} />
      </ul>
    </Fragment>
  );
}
