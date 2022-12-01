import { Fragment } from "react";
import classes from "./display.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function Display() {
  return (
    <Fragment>
      <div className={classes.body}>
        <Swiper slidesPerView={4} className="mySwiper">
          <div className={classes.container}>
            <SwiperSlide>
              <div className={classes.image1}>
                <img src="/images/artsy1.avif" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.image2}>
                <img src="/images/artsy2.avif" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.image3}>
                <img src="/images/artsy3.avif" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.image4}>
                <img src="/images/artsy4.avif" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.image5}>
                <img src="/images/artsy4.avif" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.image1}>
                <img src="/images/artsy1.avif" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.image2}>
                <img src="/images/artsy2.avif" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.image3}>
                <img src="/images/artsy3.avif" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.image4}>
                <img src="/images/artsy4.avif" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.image5}>
                <img src="/images/artsy4.avif" />
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
      <div className={classes.smallScreen}>
        <div className={classes.image1}>
          <img src="/images/artsy1.avif" />
        </div>
        <div className={classes.image2}>
          <img src="/images/artsy2.avif" />
        </div>
        <div className={classes.image3}>
          <img src="/images/artsy3.avif" />
        </div>
        <div className={classes.image4}>
          <img src="/images/artsy4.avif" />
        </div>
        <div className={classes.image5}>
          <img src="/images/artsy4.avif" />
        </div>
      </div>
    </Fragment>
  );
}
