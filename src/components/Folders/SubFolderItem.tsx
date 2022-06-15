import { useState } from "react";
import { IFolder } from "../../types/appDataTypes";
import AppChildrensType from "../../types/AppPropTypes";
import classes from "./SubFoldersItem.module.css";

interface subFolders {
  item: IFolder;
}

const SubFolderItem: React.FC<AppChildrensType & subFolders> = ({ item }) => {
  const [selected, setSelected] = useState<boolean>(false);

  console.log(item);
  const toggleHandler = () => {
    setSelected(!selected);
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
    />
  );
  // const containedFolderImg = (
  //   <img
  //     src="./img/contained-folder.ico"
  //     width={74}
  //     height={74}
  //     alt="Contained folder"
  //   />
  // );

  return (
    <li className={classes.item} onClick={toggleHandler}>
      {!selected && closedFolderImg}
      {selected && openedFolderImg}
      <div>{item.name}</div>
    </li>
  );
};

export default SubFolderItem;
