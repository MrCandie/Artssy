import React, { Fragment, useContext } from "react";
import { CartContext } from "../../CartContext";
import Header from "../../components/Homepage/Header/Header";
import ProductDetail from "../../components/ProductPage/ProductDetails";
import { storeData } from "../../Store";

export default function ProductDetails({ product, data }) {
  const cart = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Fragment>
      <Header quantity={quantity} />
      <ProductDetail allProduct={data} product={product} />;
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.productId;
  const data = await storeData();

  const product = data.find((prod) => prod.id === productId);

  return {
    props: {
      product,
      data,
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { productId: "p1" } },
      { params: { productId: "p2" } },
      { params: { productId: "p3" } },
      { params: { productId: "p4" } },
      { params: { productId: "p5" } },
      { params: { productId: "p6" } },
      { params: { productId: "p7" } },
      { params: { productId: "p8" } },
      { params: { productId: "p9" } },
    ],
    fallback: false,
  };
}
