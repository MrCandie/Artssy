import classes from "./product.module.css";
import { BsFillFilterSquareFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductFilter() {
  const router = useRouter();

  function noFilterHandler(e) {
    if (e.target.checked) {
      toast.error("No filter for this category, try again!");
    }
  }

  function belowHundredHandler() {
    router.push("/product/price");
  }
  function oneFiftyHandler() {
    router.push("/product/price1");
  }
  function twoHundredHandler() {
    router.push("/product/price2");
  }

  function aboveTwoHundredHandler() {
    router.push("/product/price3");
  }

  function rangeHandler(e) {
    if (e.target.value <= 100) {
      router.push("/product/price");
    } else if (e.target.value <= 100 || e.target.value <= 150) {
      router.push("/product/price1");
    } else if (e.target.value === 200) {
      router.push("/product/price3");
    }
  }

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
            <input onChange={noFilterHandler} id="edit" type="checkbox" />
            <label htmlFor="edit">Editorials</label>
          </div>
          <div className={classes.cat}>
            <input
              onChange={(e) => {
                if (e.target.checked) {
                  router.push("/product/fashion");
                }
              }}
              type="checkbox"
              id="fashion"
            />
            <label htmlFor="fashion">fashion</label>
          </div>
          <div className={classes.cat}>
            <input onChange={noFilterHandler} id="optics" type="checkbox" />
            <label htmlFor="optics">Optics</label>{" "}
          </div>
          <div className={classes.cat}>
            <input
              onChange={(e) => {
                if (e.target.checked) {
                  router.push("/product/art");
                }
              }}
              type="checkbox"
              id="art"
            />
            <label htmlFor="art">art & museum</label>
          </div>
          <div className={classes.cat}>
            <input
              onChange={(e) => {
                if (e.target.checked) {
                  router.push("/product/nature");
                }
              }}
              type="checkbox"
              id="nature"
            />
            <label htmlFor="nature">nature</label>
          </div>
        </form>
      </div>
      <div className={classes.category}>
        <h1>By price</h1>
        <div className={classes.cat}>
          <form>
            <p>$50.00 - $200.00</p>
            <input
              onChange={rangeHandler}
              step="50"
              type="range"
              min="50"
              max="200"
            />
          </form>
        </div>
      </div>
      <div className={classes.category}>
        <div className={classes.cats}>
          <h1>All</h1>
          <p onClick={belowHundredHandler}>Below $100.00</p>
          <p onClick={oneFiftyHandler}>$100.00 - $150.00</p>
          <p onClick={twoHundredHandler}>$150.00 - $200.00</p>
          <p onClick={aboveTwoHundredHandler}>Above $200.00</p>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={5000} />
    </section>
  );
}
