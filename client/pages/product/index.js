import React, { Fragment, useContext } from "react";
import { CartContext } from "../../CartContext";
import Header from "../../components/Homepage/Header/Header";
import Product from "../../components/ProductPage/Product";
import { storeData } from "../../Store";

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
  const data = await storeData();
  return {
    props: {
      stores: data,
    },
  };
}
