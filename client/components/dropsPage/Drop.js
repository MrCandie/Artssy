import { Fragment } from "react";
import classes from "./drop.module.css";
import Newsletter from "../Homepage/Newsletter/Newsletter";
import Footer from "../Homepage/footer/Footer";

export default function Drop() {
  return (
    <Fragment>
      <section className={classes.section}>
        <div className={classes.notification}>
          <h1>Turn on notifications so that no drops will miss you.</h1>
          <button>Notify me</button>
        </div>
        <div className={classes.container}>
          <div className={classes.drop}>
            <div className={classes.auction}>
              <img src="/images/auction10.avif" />
              <div className={classes.time}>
                <p>6hr : 40mins : 15s</p>
                <h2>Join</h2>
              </div>
            </div>
            <div className={classes.content}>
              <p className={classes.now}>Live now</p>
              <h2>November 21 at 11 am WAT</h2>
              <h1>Eyo : Eko For Show</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis
                vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
              </h3>
              <h5>Creator: Aliya minat</h5>
              <h4>Get notified</h4>
            </div>
          </div>
          <div className={classes.drop}>
            <div className={classes.auction}>
              <img src="/images/auction9.avif" />
              <div className={classes.time}>
                <p>6hr : 40mins : 15s</p>
                <h2>Join</h2>
              </div>
            </div>
            <div className={classes.content}>
              <p className={classes.end}>Ended</p>
              <h2>November 21 at 11 am WAT</h2>
              <h1>Eyo : Eko For Show</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis
                vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
              </h3>
              <h5>Creator: Aliya minat</h5>
              <h4>Get notified</h4>
            </div>
          </div>
          <div className={classes.drop}>
            <div className={classes.auction}>
              <img src="/images/auction7.avif" />
              <div className={classes.time}>
                <p>6hr : 40mins : 15s</p>
                <h2>Join</h2>
              </div>
            </div>
            <div className={classes.content}>
              <p>Upcoming</p>
              <h2>November 21 at 11 am WAT</h2>
              <h1>Eyo : Eko For Show</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis
                vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
              </h3>
              <h5>Creator: Aliya minat</h5>
              <h4>Get notified</h4>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </Fragment>
  );
}
