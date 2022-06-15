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
    return childrenItems.map((item) => (
      <>
        <SubFolderItem key={item.id} item={item}>
          <ul>{childrenFolder(item.id)}</ul>
        </SubFolderItem>
      </>
    ));
  };
  const directories = foldersData.map((item) => {
    return typeof item.parentId === "undefined" ? (
      <ul key={item.id}>{childrenFolder(item.id)}</ul>
    ) : (
      ""
    );
  });

  return <>{foldersData.length > 0 && directories}</>;
};

export default FoldersList;
