import { Fragment } from "react";
import Auction from "../components/Homepage/auction/Auction";
import Creator from "../components/Homepage/creators/Creator";
import Display from "../components/Homepage/Display/display";
import Explore from "../components/Homepage/explore/Explore";
import Featured from "../components/Homepage/featured/Featured";
import Footer from "../components/Homepage/footer/Footer";
import Hero from "../components/Homepage/Hero/Hero";
import Newsletter from "../components/Homepage/Newsletter/Newsletter";

export default function Home() {
  return (
    <Fragment>
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
