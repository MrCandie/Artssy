import React, { Fragment, useContext } from "react";
import { CartContext } from "../../CartContext";
import Header from "../../components/Homepage/Header/Header";
import OneFifty from "../../components/ProductPage/sort/oneFifty";
import { storeData } from "../../Store";

export default function price1({ product }) {
  const cart = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Fragment>
      <Header quantity={quantity} />
      <OneFifty product={product} />;
    </Fragment>
  );
}

export async function getStaticProps() {
  const products = await storeData();
  const product = products.filter(
    (data) => data.price >= 100 && data.price <= 150
  );

  return {
    props: {
      product,
    },
  };
}
