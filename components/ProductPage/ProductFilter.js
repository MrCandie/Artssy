import classes from "./product.module.css";
import { BsFillFilterSquareFill } from "react-icons/bs";

export default function ProductFilter() {
  return (
    <section className={classes.filter}>
      <div className={classes.fil}>
        <span>
          <BsFillFilterSquareFill />
        </span>
        <span>Filter</span>
      </div>
      <hr />
      <div className={classes.category}>
        <h1>By Category</h1>
        <form>
          <div className={classes.cat}>
            <input type="checkbox" />
            <label>Editorials</label>
          </div>
          <div className={classes.cat}>
            <input type="checkbox" />
            <label>fashion</label>
          </div>
          <div className={classes.cat}>
            <input type="checkbox" />
            <label>optics</label>
          </div>
          <div className={classes.cat}>
            <input type="checkbox" />
            <label>art & museum</label>
          </div>
          <div className={classes.cat}>
            <input type="checkbox" />
            <label>nature</label>
          </div>
        </form>
      </div>
      <div className={classes.category}>
        <h1>By price</h1>
        <div className={classes.cat}>
          <form>
            <p>$100.00 - $150.00</p>
            <input type="range" min="100" max="150" />
          </form>
        </div>
      </div>
      <div className={classes.category}>
        <div className={classes.cats}>
          <h1>All</h1>
          <p>Below $100.00</p>
          <p>$100.00 - $150.00</p>
          <p>$150.00 - $200.00</p>
          <p>Above $200.00</p>
        </div>
      </div>
    </section>
  );
}
