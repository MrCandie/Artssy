import React, { Fragment, useContext, useState } from "react";
import { CartContext } from "../../CartContext";
import Auction from "../../components/auctionPage/Auction";
import Header from "../../components/Homepage/Header/Header";

export default function Auctions({ data }) {
  const cart = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Fragment>
      <Header quantity={quantity} />
      <Auction data={data} />;
    </Fragment>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://artsy-e9951-default-rtdb.firebaseio.com/auction.json"
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
      data: loadedData,
    },
  };
}
