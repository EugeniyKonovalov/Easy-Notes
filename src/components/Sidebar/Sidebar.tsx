import React from "react";
import classes from "./Sidebar.module.css";
import Folders from "../Folders/Folders";
import { useAppDispatch } from "../../hooks/redux";
import { appActions } from "../../store/appSlice";

const Sidebar: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const removeSelectedFolderId = () => {
    dispatch(appActions.removeSelectedFolderId());
  };
  return (
    <aside>
      <div className={classes.sidebar}>
        <h2
          className={classes.title}
          title="Press if you want to add folder in root"
          onClick={removeSelectedFolderId}
        >
          Folders
        </h2>
        <Folders />
      </div>
    </aside>
  );
};

export default Sidebar;
