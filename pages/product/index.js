import React from "react";
import Product from "../../components/ProductPage/Product";
import { allProducts, getProduct } from "../../Store";

export default function Products({ stores }) {
  return <Product store={stores} />;
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
