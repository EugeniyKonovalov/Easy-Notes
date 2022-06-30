import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { ISubFolder } from "../../types/appDataTypes";
import AppChildrensType from "../../types/AppPropTypes";
import { FOLDERS_ROUTE } from "../../utils/constants";
import classes from "./SubFoldersItem.module.css";

const SubFolderItem: React.FC<AppChildrensType & ISubFolder> = (props) => {
  const [selected, setSelected] = useState<boolean>(true);
  const selectedFolderId = useAppSelector(
    (state) => state.appItem.selectedFolderId
  );
  return (
    <li
      className={`${classes.item} ${!selected ? classes.show : classes.hide}`}
    >
      <NavLink
        to={FOLDERS_ROUTE + props.item.id}
        className={({ isActive }) =>
          isActive && selectedFolderId !== 1 ? classes.active : ""
        }
        onClick={() => setSelected(!selected)}
      >
        <div
          className={`
          ${classes["folder-icon"]}
          ${!selected && classes.opened}
          ${selected && classes.closed}
           `}
        ></div>
        {props.item.name}
      </NavLink>
      {props.children}
    </li>
  );
};

export default SubFolderItem;
