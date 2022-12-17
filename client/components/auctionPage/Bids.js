import Link from "next/link";
import classes from "./auction.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import Pagination from "../ui/pagination";

export default function Bids({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const currentPost = data.slice(firstPostIndex, lastPostIndex);
  return (
    <section className={classes.bid}>
      <h2>Top bids from popular creators</h2>
      <div className={classes.bids}>
        {currentPost.map((item) => (
          <div className={classes.details}>
            <div className={classes.detail}>
              <span>
                <AiOutlineHeart />
              </span>
              <img src={item.image} />
              <h1>Out of the box</h1>
            </div>
            <div className={classes.creator}>
              <h1>Creator: {item.creator}</h1>
              <h1>Date: {item.date}</h1>
              <h1>Highest bid: {item.bid}ETH</h1>
            </div>
            <div className={classes.price}>
              <div className={classes.eth}>
                <h1>current bid</h1>
                <h1>{item.currentBid} ETH</h1>
              </div>
              <Link href={`/auction/${item.id}`}>place bid</Link>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPost={data.length}
        postPerPage={postPerPage}
      />
    </section>
  );
}
