// import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { appActions } from "../../store/appSlice";
import { IFolder } from "../../types/appDataTypes";
import AppChildrensType from "../../types/AppPropTypes";
import classes from "./SubFoldersItem.module.css";

interface subFolders {
  item: IFolder;
}

const SubFolderItem: React.FC<AppChildrensType & subFolders> = (props) => {
  // const [show, setShow] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const folderId = useAppSelector((state) => state.appItem.selectedFolderId);
  console.log(folderId);

  const selectedFolderIdHandler = () => {
    dispatch(appActions.setSelectedFolderId(props.item.id));
  };

  const closedFolderImg = (
    <img
      src="./img/closed-folder.ico"
      width={74}
      height={74}
      alt="Contained folder"
    />
  );
  const openedFolderImg = (
    <img
      src="./img/opened-folder.ico"
      width={74}
      height={74}
      alt="Opened folder"
      onClick={selectedFolderIdHandler}
    />
  );

  return (
    <NavLink to={`/folder/${props.item.id}`}>
      <li
        // onClick={() => setShow(!show)}
        className={
          props.item.parentId === 1
            ? classes.item
            : classes.item && classes.children
        }
      >
        {openedFolderImg}
        {props.item.name} {props.children}
      </li>
    </NavLink>
  );
};

export default SubFolderItem;
