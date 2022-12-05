import React, { Fragment, useContext } from "react";
import { CartContext } from "../../CartContext";
import Header from "../../components/Homepage/Header/Header";
import Product from "../../components/ProductPage/Product";

export default function Products({ stores }) {
  const cart = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Fragment>
      <Header quantity={quantity} />
      <Product store={stores} />;
    </Fragment>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://artsy-e9951-default-rtdb.firebaseio.com/store.json"
  );
  const data = await res.json();
  const loadedData = [];
  for (const key in data) {
    loadedData.push({
      id: key,
      ...data[key],
    });
  }
  return {
    props: {
      stores: loadedData,
    },
  };
}
