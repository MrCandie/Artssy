import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <h1>Photography is poetry & beautiful untold stories</h1>
      <div>
        <h2 className={classes.desc}>
          Flip through more than 10,000 vintage shots, old photographs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </h2>
      </div>
    </section>
  );
}
