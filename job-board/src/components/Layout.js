import React from "react";
import App from "../App";

const Layout = ({ children }) => {
  return (
    <>
      <App />
      <main>{children}</main>
    </>
  );
};

export default Layout;
