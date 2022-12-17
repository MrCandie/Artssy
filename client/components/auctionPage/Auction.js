import classes from "./auction.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Bids from "./Bids";
import { Spinner } from "../spinner/spinner";

export default function Auction({ data }) {
  if (data.length === 0) {
    return <Spinner />;
  }

  return (
    <section className={classes.section}>
      <h1>Here’s an overview of products actively on auction, explore!</h1>
      <div className={classes.container}>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((item) => {
            return (
              <div key={item.id}>
                <SwiperSlide className={classes.auction}>
                  <img src={item.image} />
                  <div className={classes.time}>
                    <p>{item.time} hours</p>
                  </div>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>

      <div className={classes.small}>
        <Swiper
          slidesPerView={1.5}
          spaceBetween={30}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((item) => {
            return (
              <div key={item.id}>
                <SwiperSlide className={classes.auction}>
                  <img src={item.image} />
                  <div className={classes.time}>
                    <p>{item.time} hours</p>
                  </div>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
      <Bids data={data} />
    </section>
  );
}
