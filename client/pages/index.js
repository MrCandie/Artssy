import { Fragment, useContext } from "react";
import { CartContext } from "../CartContext";
import Auction from "../components/Homepage/auction/Auction";
import Creator from "../components/Homepage/creators/Creator";
import Display from "../components/Homepage/Display/display";
import Explore from "../components/Homepage/explore/Explore";
import Featured from "../components/Homepage/featured/Featured";
import Footer from "../components/Homepage/footer/Footer";
import Header from "../components/Homepage/Header/Header";
import Hero from "../components/Homepage/Hero/Hero";
import Newsletter from "../components/Homepage/Newsletter/Newsletter";

export default function Home() {
  const cart = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Fragment>
      <Header quantity={quantity} />
      <Hero />
      <Display />
      <Featured />
      <Auction />
      <Explore />
      <Creator />
      <Newsletter />
      <Footer />
    </Fragment>
  );
}
