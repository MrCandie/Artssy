import React, { Fragment, useContext } from "react";
import { CartContext } from "../../CartContext";
import Favorite from "../../components/favorites/Favorite";
import Header from "../../components/Homepage/Header/Header";
import { storeData } from "../../Store";

export default function Index({ data }) {
  const cart = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Fragment>
      <Header quantity={quantity} />
      <Favorite data={data} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const data = await storeData();

  return {
    props: {
      data,
    },
  };
}
