import { NavLink } from "react-router-dom";
import { IFolder } from "../../types/appDataTypes";
import AppChildrensType from "../../types/AppPropTypes";
import { FOLDERS_ROUTE } from "../../utils/constants";
import classes from "./SubFoldersItem.module.css";

interface subFolders {
  item: IFolder;
}

const SubFolderItem: React.FC<AppChildrensType & subFolders> = (props) => {
  const closedFolderImg = (
    <img
      src={require("./../../assets/img/closed-folder.ico")}
      width={74}
      height={74}
      alt="Contained folder"
    />
  );
  const openedFolderImg = (
    <img
      src={require("./../../assets/img/opened-folder.ico")}
      width={74}
      height={74}
      alt="Opened folder"
    />
  );

  return (
    <li
      className={
        props.item.parentId === 1
          ? classes.item
          : classes.item && classes.children
      }
    >
      {closedFolderImg}
      <NavLink to={FOLDERS_ROUTE + props.item.id}>{props.item.name}</NavLink>

      {props.children}
    </li>
  );
};

export default SubFolderItem;
