import classes from "./creator.module.css";

import React from "react";

export default function Creator() {
  return (
    <section className={classes.section}>
      <div className={classes.top}>
        <h1>TOP CREATORS OF THE WEEK</h1>
        <ul>
          <li>Editorials</li>
          <li>Fashion</li>
          <li>Lifestyle</li>
          <li>Blueprint</li>
        </ul>
      </div>
      <div className={classes.content}>
        <p>
          “Everything always looked better in black and white. Everything always
          as if it were the first time; there’s always more people in a black
          and white photograph. It just makes it seem that there were more
          people at a gig, more people at a football match, than with colour
          photography. Everything looks more exciting.”– Jack Lowden
        </p>
      </div>
      <s>1985</s>
      <div className={classes.image}>
        <img src="/images/creator1.avif" />
      </div>
    </section>
  );
}
