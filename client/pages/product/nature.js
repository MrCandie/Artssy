import React, { Fragment, useContext } from "react";
import { CartContext } from "../../CartContext";
import Header from "../../components/Homepage/Header/Header";
import Nature from "../../components/ProductPage/sort/nature";
import { storeData } from "../../Store";

export default function Natures({ product }) {
  const cart = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Fragment>
      <Header quantity={quantity} />
      <Nature product={product} />;
    </Fragment>
  );
}

export async function getStaticProps() {
  const product = await storeData();
  const natureProducts = product.filter((data) => data.type === "nature");

  return {
    props: {
      product: natureProducts,
    },
  };
}
