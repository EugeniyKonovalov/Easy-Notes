import React from "react";
import SidebarMenu from "./SidebarMenu";
import classes from "./Sidebar.module.css";
import Folders from "../Folders/Folders";

const Sidebar: React.FC = (props) => {
  return (
    <aside className={classes["sidebar-is-auth"]}>
      <SidebarMenu />
      <div className={classes["sidebar-directories"]}>
        <Folders />
      </div>
    </aside>
  );
};

export default Sidebar;
