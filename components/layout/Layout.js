import React, { Fragment, useContext } from "react";

export default function Layout({ children }) {
  return (
    <Fragment>
      <main>{children}</main>
    </Fragment>
  );
}
