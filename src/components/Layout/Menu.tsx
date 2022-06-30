import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { appActions } from "../../store/appSlice";
import { HOME_ROUTE, NEW_FOLDER, NEW_NOTE } from "../../utils/constants";
import classes from "./Menu.module.css";

const Menu: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectedFolderId = useAppSelector(
    (state) => state.appItem.selectedFolderId
  );

  const deleteFolderHandler = () => {
    dispatch(appActions.deleteFolderAsync(selectedFolderId));
    navigate(HOME_ROUTE, { replace: true });
  };

  return (
    <div className={classes.menu}>
      <ul>
        <Link to={NEW_FOLDER}>
          <li className={classes["menu-item"]}>
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
          <li className={classes["menu-item"]}>
            <img
              src={require("../../assets/img/edit.ico")}
              width={36}
              height={36}
              alt="Edit notes"
            />
            <span>Add Note</span>
          </li>
        </Link>
        <li className={classes["menu-item"]} onClick={deleteFolderHandler}>
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

export default Menu;
