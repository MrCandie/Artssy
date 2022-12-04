import { useRouter } from "next/router";
import React, { Fragment } from "react";

export default function ProductItem({ products }) {
  const router = useRouter();

  return (
    <Fragment>
      {products.map((product, i) => (
        <li onClick={() => router.push(`/product/${product.id}`)} key={i}>
          <img src={`../../${product.image}`} />
          <h1>{product.name}</h1>
          <p>${product.price}</p>
        </li>
      ))}
    </Fragment>
  );
}
