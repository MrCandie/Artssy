import classes from "./product.module.css";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { Fragment, useContext } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import { allProducts } from "../../Store";
import { CartContext } from "../../CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

export default function ProductDetail({ product, allProduct }) {
  const cart = useContext(CartContext);
  if (!product) {
    return <p>Loading...</p>;
  }

  function addToCartHandler() {
    toast.success("One item added to cart", {
      autoClose: 500,
    });
    cart.addOneToCart(product.id);
  }

  function removeFromCartHandler() {
    toast.success("One item removed from cart", {
      autoClose: 500,
    });
    cart.removeOneFromCart(product.id);
  }

  const quantity = cart.getProductQuantity(product.id);

  const productIsFavorite = cart.ids.includes(product.id);

  function favoritesHandler() {
    if (productIsFavorite) {
      toast.success(`${product.name} removed from favorites`);
      return cart.removeFavorites(product.id);
    } else {
      toast.success(`${product.name} added to favorites`);
      return cart.addFavorites(product.id);
    }
  }

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

          <div className={classes.desc}>
            <p>{product.description}</p>
          </div>
          <div className={classes.quantity}>
            <span onClick={removeFromCartHandler}>
              <AiOutlineMinus />
            </span>
            <span>{quantity}</span>
            <span onClick={addToCartHandler}>
              <GrAdd />
            </span>
          </div>
          <div className={classes.button}>
            <button onClick={addToCartHandler}>
              Add to cart
              <span>
                <AiOutlineArrowRight />
              </span>
            </button>
            <span onClick={favoritesHandler} className={classes.span}>
              {productIsFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
            </span>
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
            <div key={data.id}>
              <SwiperSlide className={classes.feature}>
                <div className={classes.featImg}>
                  <img src={`../../${data.image}`} />
                </div>
                <div className={classes.featDet}>
                  <p>{data.name}</p>
                  <p>${data.price}</p>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </div>
      </Swiper>
      <div className={classes.btn}>
        <Link href="/product">Explore all</Link>
      </div>
      <ToastContainer position="top-center" autoClose={5000} />
    </Fragment>
  );
}
