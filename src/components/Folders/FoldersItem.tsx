import React from "react";
import { useAppSelector } from "../../hooks/redux";
import SubFolderItem from "./SubFolderItem";

const FoldersList: React.FC = () => {
  const foldersData = useAppSelector((state) => state.folderItem.folders);
  const childrenFolder = (childId: number) => {
    let childrenItems = foldersData.filter((item) => {
      return item.parentId === childId;
    });
    childrenItems.sort((a, b) => (a.id > b.id ? 1 : -1));
    console.log(childrenItems);
    return childrenItems.map((item) => (
      <SubFolderItem key={item.id} item={item} />
    ));
  };
  const directories = foldersData.map((item) => {
    return typeof item.parentId === "undefined" ? (
      <ul key={item.id}>{childrenFolder(item.id)}</ul>
    ) : (
      ""
    );
  });

  return <ul>{foldersData.length > 0 && directories}</ul>;
};

export default FoldersList;
