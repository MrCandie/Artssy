import classes from "./newsletter.module.css";

import React from "react";

export default function Newsletter() {
  return (
    <section className={classes.section}>
      <h1>NEWSLETTER</h1>
      <h2>Subscribe to get daily updates on new drops & exciting deals </h2>
      <form>
        <input placeholder="ENTER YOUR EMAIL" type="email" />
        <button>Subscribe</button>
      </form>
    </section>
  );
}
