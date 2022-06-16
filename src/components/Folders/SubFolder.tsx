import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";

const SubFolder = () => {
  const selectedFolderId = useAppSelector(
    (state) => state.folderItem.selectedFolderId
  );
  return <Link to={`folder/${selectedFolderId}`}>View</Link>;
};

export default SubFolder;
