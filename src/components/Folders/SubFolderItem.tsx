import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { folderActions } from "../../store/appSlice";
import { IFolder } from "../../types/appDataTypes";
import AppChildrensType from "../../types/AppPropTypes";
import classes from "./SubFoldersItem.module.css";

interface subFolders {
  item: IFolder;
}

const SubFolderItem: React.FC<AppChildrensType & subFolders> = (props) => {
  const [selected, setSelected] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const folderId = useAppSelector((state) => state.folderItem.selectedFolderId);
  console.log(folderId);
  const toggleHandler = () => {
    setSelected(!selected);
  };
  const selectedFolderIdHandler = () => {
    dispatch(folderActions.setSelectedFolderId(props.item.id));
  };
  const closedFolderImg = (
    <img
      src="./img/closed-folder.ico"
      width={74}
      height={74}
      alt="Contained folder"
      onClick={toggleHandler}
    />
  );
  const openedFolderImg = (
    <img
      src="./img/opened-folder.ico"
      width={74}
      height={74}
      alt="Opened folder"
      onClick={toggleHandler}
    />
  );
  const containedFolderImg = (
    <img
      src="./img/contained-folder.ico"
      width={74}
      height={74}
      alt="Contained folder"
      onClick={toggleHandler}
    />
  );

  return (
    <NavLink to={`/folder/${folderId}`}>
      <li className={classes.item} onClick={selectedFolderIdHandler}>
        {!selected && closedFolderImg}
        {selected && openedFolderImg}
        {props.item.name} {props.children}
      </li>
    </NavLink>
  );
};

export default SubFolderItem;
