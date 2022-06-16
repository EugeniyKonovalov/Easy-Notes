import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { appActions } from "../../store/appSlice";
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
        <Link to="new_folder">
          <li className={classes["sidebar-menu-item"]}>
            <img
              src="./img/closed-folder.ico"
              width={36}
              height={36}
              alt="Add folder"
            />
            <span>Add folder</span>
          </li>
        </Link>
        <Link to="/create_note">
          <li className={classes["sidebar-menu-item"]}>
            <img src="./img/add.ico" width={36} height={36} alt="Edit notes" />
            <span>Add/Change</span>
          </li>
        </Link>
        <li
          className={classes["sidebar-menu-item"]}
          onClick={deleteFolderHandler}
        >
          <img src="./img/remove.ico" width={36} height={36} alt="Remove" />
          <span>Remove</span>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
