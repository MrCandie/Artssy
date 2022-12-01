import classes from "./product.module.css";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import { CiHeart } from "react-icons/ci";
import { Fragment, useContext } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import { allProducts } from "../../Store";
import { CartContext } from "../../CartContext";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

export default function ProductDetail({ product }) {
  const cart = useContext(CartContext);

  const allProduct = allProducts();
  if (!product) {
    return <p>Loading...</p>;
  }

  const quantity = cart.getProductQuantity(product.id);
  return (
    <Fragment>
      <div className={classes.details}>
        <div className={classes.image}>
          <img src={`../../${product.image}`} />
        </div>
        <div className={classes.description}>
          <h1>Creator: {product.name}</h1>
          <hr />
          <h2>{product.creator}</h2>
          <p>{product.location}</p>
          <p>Total views: {product.totalViews}</p>
          <div className={classes.quantity}>
            <span onClick={() => cart.removeOneFromCart(product.id)}>
              <AiOutlineMinus />
            </span>
            <span>{quantity}</span>
            <span onClick={() => cart.addOneToCart(product.id)}>
              <GrAdd />
            </span>
          </div>
          <div className={classes.button}>
            <button onClick={() => cart.addOneToCart(product.id)}>
              Add to cart
              <span>
                <AiOutlineArrowRight />
              </span>
            </button>
            <span className={classes.span}>
              <CiHeart />
            </span>
          </div>
          <div className={classes.desc}>
            <h2>Description</h2>
            {false && <p>{product.description}</p>}
          </div>
          <div className={classes.desc}>
            <h2>Listings</h2>
          </div>
          <div className={classes.desc}>
            <h2>Status</h2>
          </div>
        </div>
      </div>
      <div className={classes.more}>
        <h1>Explore more from this collection</h1>
        <div className={classes.icon}>
          <span>
            <FaLessThan />
          </span>
          <span>
            <FaGreaterThan />
          </span>
        </div>
      </div>
      <Swiper slidesPerView={5} className={classes.featured}>
        <div>
          {allProduct.map((data, i) => (
            <div key={i}>
              <SwiperSlide className={classes.feature}>
                <div className={classes.featImg}>
                  <img src={`../../${data.image}`} />
                </div>
                <div className={classes.featDet}>
                  <p>{data.name}</p>
                  <p>{data.price}</p>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </div>
      </Swiper>
      <div className={classes.btn}>
        <Link href="/product">Explore all</Link>
      </div>
    </Fragment>
  );
}
