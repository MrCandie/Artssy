import React, { useState } from "react";
import Auction from "../../components/auctionPage/Auction";

export default function Auctions({ data }) {
  return <Auction data={data} />;
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
