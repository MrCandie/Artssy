import React, { Fragment, useContext } from "react";
import { CartContext } from "../../CartContext";
import Header from "../../components/Homepage/Header/Header";
import Fashion from "../../components/ProductPage/sort/fashion";
import { storeData } from "../../Store";

export default function Fashions({ product }) {
  const cart = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Fragment>
      <Header quantity={quantity} />
      <Fashion product={product} />;
    </Fragment>
  );
}

export async function getStaticProps() {
  const product = await storeData();
  const fashionProducts = product.filter((data) => data.type === "fashion");

  return {
    props: {
      product: fashionProducts,
    },
  };
}
