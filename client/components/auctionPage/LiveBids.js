import classes from "./auction.module.css";
import { IoIosSend } from "react-icons/io";
import { Fragment, useEffect, useRef, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import io from "socket.io-client";
import axios from "axios";

const socket = io.connect("http://localhost:3001");

export default function LiveBids({ data, bid }) {
  const messageRef = useRef();
  const nameRef = useRef();
  const [messageContent, setMessageContent] = useState([]);

  async function bidHandler(e) {
    e.preventDefault();
    const enteredMessage = messageRef.current.value;
    const enteredName = nameRef.current.value;
    if (!enteredMessage || !enteredName) {
      return;
    }
    socket.emit("send_message", {
      name: enteredName.trim(),
      message: enteredMessage.trim(),
    });
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageContent((prevMsg) => [
        { name: data.name, message: data.message },
        ...prevMsg,
      ]);
    });
  }, [socket, messageContent]);

  return (
    <Fragment>
      <section className={classes.live}>
        <div className={classes.livebid}>
          <div className={classes.image}>
            <div className={classes.black}></div>
            <img src={data.image} />
          </div>
          <div className={classes.current}>
            <h1>Current bid {data.currentBid}ETH</h1>
            <p>Tag: Lost or Wither</p>
          </div>
          <h2 className={classes.h2}>live</h2>
        </div>
        <div className={classes.viewer}>
          <div className={classes.view}>
            {messageContent.map((bids) => (
              <div className={classes.views}>
                <div className={classes.img}>
                  <img src="../../images/art.avif" />
                </div>
                <div className={classes.content}>
                  <p>{bids.name}</p>
                  <p>{bids.message}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={classes.form}>
            <h1>Creator : {data.creator}</h1>
            <form onSubmit={bidHandler}>
              <div>
                <div className="form">
                  <input ref={nameRef} placeholder="Enter name" />
                  <input ref={messageRef} placeholder="place a bid" />
                </div>
                <button>
                  <IoIosSend />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div className={classes.upcoming}>
        <h1>See upcoming drops</h1>
        <Link href="/drop">
          <span>
            <AiOutlineArrowRight />
          </span>
        </Link>
      </div>
    </Fragment>
  );
}
