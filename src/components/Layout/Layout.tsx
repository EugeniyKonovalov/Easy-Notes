import React, { Fragment } from "react";
import AppChildrensType from "../../types/AppPropTypes";
import Header from "./Header";
import Sidebar from "../Sidebar/Sidebar";
import classes from "./Layout.module.css";
const Layout: React.FC<AppChildrensType> = (props) => {
  return (
    <Fragment>
      <Header />
      <div className={classes.main}>
        <Sidebar />
        <main className={classes.content}>{props.children}</main>
      </div>
    </Fragment>
  );
};

export default Layout;
