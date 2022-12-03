import classes from "./product.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { useRouter } from "next/router";

export default function ProductHeader() {
  const router = useRouter();
  function sortHandler(e) {
    if (e.target.value === "fashion") {
      router.push("/product/fashion");
    } else if (e.target.value === "art") {
      router.push("/product/art");
    } else if (e.target.value === "nature") {
      router.push("/product/nature");
    }
  }
  return (
    <header className={classes.header}>
      <div className={classes.sort}>
        <p>
          see 1-6 of 15 results
          <span>
            <IoMdArrowDropdown />
          </span>
        </p>
        <form>
          <label>Sort by</label>
          <select onChange={sortHandler}>
            <option value="">Select</option>
            <option value="fashion">fashion</option>
            <option value="nature">nature</option>
            <option value="art">art</option>
          </select>
        </form>
      </div>
    </header>
  );
}
