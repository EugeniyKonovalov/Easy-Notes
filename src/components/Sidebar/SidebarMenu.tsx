import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { appActions } from "../../store/appSlice";
import { NEW_FOLDER, NEW_NOTE } from "../../utils/constants";
import classes from "./SidebarMenu.module.css";

const SidebarMenu: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const selectedFolderId = useAppSelector(
    (state) => state.appItem.selectedFolderId
  );
  const deleteFolderHandler = (id: any) => {
    dispatch(appActions.deleteFolderAsync(selectedFolderId));
  };

  return (
    <div className={classes["sidebar-menu"]}>
      <ul>
        <Link to={NEW_FOLDER}>
          <li className={classes["sidebar-menu-item"]}>
            <img
              src={require("../../assets/img/add.ico")}
              width={36}
              height={36}
              alt="Add folder"
            />
            <span>Add folder</span>
          </li>
        </Link>
        <Link to={NEW_NOTE}>
          <li className={classes["sidebar-menu-item"]}>
            <img
              src={require("../../assets/img/edit.ico")}
              width={36}
              height={36}
              alt="Edit notes"
            />
            <span>Add Note</span>
          </li>
        </Link>
        <li
          className={classes["sidebar-menu-item"]}
          onClick={deleteFolderHandler}
        >
          <img
            src={require("../../assets/img/remove.ico")}
            width={36}
            height={36}
            alt="Remove"
          />
          <span>Remove folder</span>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
