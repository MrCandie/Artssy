import classes from "./auction.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Bids from "./Bids";

export default function Auction() {
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
          <div>
            <SwiperSlide className={classes.auction}>
              <img src="/images/auction1.avif" />
              <div className={classes.time}>
                <p>6hr : 40mins : 15s</p>
              </div>
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide className={classes.auction}>
              <img src="/images/auction2.avif" />
              <div className={classes.time}>
                <p>6hr : 40mins : 15s</p>
              </div>
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide className={classes.auction}>
              <img src="/images/auction3.avif" />
              <div className={classes.time}>
                <p>6hr : 40mins : 15s</p>
              </div>
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide className={classes.auction}>
              <img src="/images/auction4.avif" />
              <div className={classes.time}>
                <p>6hr : 40mins : 15s</p>
              </div>
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide className={classes.auction}>
              <img src="/images/auction5.avif" />
              <div className={classes.time}>
                <p>6hr : 40mins : 15s</p>
              </div>
            </SwiperSlide>
          </div>

          <div>
            <SwiperSlide className={classes.auction}>
              <img src="/images/auction6.avif" />
              <div className={classes.time}>
                <p>6hr : 40mins : 15s</p>
              </div>
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide className={classes.auction}>
              <img src="/images/auction7.avif" />
              <div className={classes.time}>
                <p>6hr : 40mins : 15s</p>
              </div>
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide className={classes.auction}>
              <img src="/images/auction8.avif" />
              <div className={classes.time}>
                <p>6hr : 40mins : 15s</p>
              </div>
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide className={classes.auction}>
              <img src="/images/auction9.avif" />
              <div className={classes.time}>
                <p>6hr : 40mins : 15s</p>
              </div>
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide className={classes.auction}>
              <img src="/images/auction10.avif" />
              <div className={classes.time}>
                <p>6hr : 40mins : 15s</p>
              </div>
            </SwiperSlide>
          </div>
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
          <div>
            <SwiperSlide className={classes.auction}>
              <img src="/images/auction1.avif" />
              <div className={classes.time}>
                <p>6hr : 40mins : 15s</p>
              </div>
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide className={classes.auction}>
              <img src="/images/auction2.avif" />
              <div className={classes.time}>
                <p>6hr : 40mins : 15s</p>
              </div>
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide className={classes.auction}>
              <img src="/images/auction3.avif" />
              <div className={classes.time}>
                <p>6hr : 40mins : 15s</p>
              </div>
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide className={classes.auction}>
              <img src="/images/auction4.avif" />
              <div className={classes.time}>
                <p>6hr : 40mins : 15s</p>
              </div>
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide className={classes.auction}>
              <img src="/images/auction5.avif" />
              <div className={classes.time}>
                <p>6hr : 40mins : 15s</p>
              </div>
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide className={classes.auction}>
              <img src="/images/auction6.avif" />
              <div className={classes.time}>
                <p>6hr : 40mins : 15s</p>
              </div>
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide className={classes.auction}>
              <img src="/images/auction7.avif" />
              <div className={classes.time}>
                <p>6hr : 40mins : 15s</p>
              </div>
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide className={classes.auction}>
              <img src="/images/auction8.avif" />
              <div className={classes.time}>
                <p>6hr : 40mins : 15s</p>
              </div>
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide className={classes.auction}>
              <img src="/images/auction9.avif" />
              <div className={classes.time}>
                <p>6hr : 40mins : 15s</p>
              </div>
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide className={classes.auction}>
              <img src="/images/auction10.avif" />
              <div className={classes.time}>
                <p>6hr : 40mins : 15s</p>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
      <Bids />
    </section>
  );
}
