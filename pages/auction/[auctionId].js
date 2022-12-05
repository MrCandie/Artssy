import React, { Fragment, useContext } from "react";
import { CartContext } from "../../CartContext";
import LiveBids from "../../components/auctionPage/LiveBids";
import Header from "../../components/Homepage/Header/Header";

export default function LiveBid({ data, bid }) {
  const cart = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Fragment>
      <Header quantity={quantity} />
      <LiveBids bid={bid} data={data} />;
    </Fragment>
  );
}

export async function getStaticProps(context) {
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

  const response = await fetch(
    "https://artsy-e9951-default-rtdb.firebaseio.com/view.json"
  );
  const bid = await response.json();
  const loadedbid = [];
  for (const key in bid) {
    loadedbid.push({
      id: key,
      ...bid[key],
    });
  }

  const { params } = context;
  const { auctionId } = params;

  const auctionData = loadedData.find((data) => data.id === auctionId);

  return {
    props: {
      data: auctionData,
      bid: loadedbid,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { auctionId: "a1" } },
      { params: { auctionId: "a2" } },
      { params: { auctionId: "a3" } },
      { params: { auctionId: "a4" } },
      { params: { auctionId: "a5" } },
      { params: { auctionId: "a6" } },
      { params: { auctionId: "a7" } },
      { params: { auctionId: "a8" } },
      { params: { auctionId: "a9" } },
      { params: { auctionId: "a10" } },
    ],
    fallback: false,
  };
}
