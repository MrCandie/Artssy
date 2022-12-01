import classes from "./product.module.css";
import { IoMdArrowDropdown } from "react-icons/io";

export default function ProductHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.search}>
        <form>
          <input placeholder="Search" />
        </form>
      </div>
      <div className={classes.sort}>
        <p>
          see 1-6 of 15 results
          <span>
            <IoMdArrowDropdown />
          </span>
        </p>
        <form>
          <label>Sort by</label>
          <select>
            <option></option>
          </select>
        </form>
      </div>
    </header>
  );
}
