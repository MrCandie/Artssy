import React, { Fragment } from "react";
import Header from "../Homepage/Header/Header";

export default function Layout({ children }) {
  return (
    <Fragment>
      <Header />;<main>{children}</main>
    </Fragment>
  );
}
