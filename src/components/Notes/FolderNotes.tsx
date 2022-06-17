import React, { useEffect } from "react";
import FolderNoteItem from "./FolderNoteItem";
import classes from "./FolderNotes.module.css";
import Card from "../UI/Card";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useParams } from "react-router-dom";
import { appActions } from "../../store/appSlice";

const FolderNotes: React.FC = () => {
  const noteData = useAppSelector((state) => state.appItem.notes);
  const selectedFolderId = useAppSelector(
    (state) => state.appItem.selectedFolderId
  );
  const dispatch = useAppDispatch();
  const params = useParams();
  const { folderId } = params;

  useEffect(() => {
    dispatch(appActions.setSelectedFolderId(Number(folderId)));
  }, [dispatch, folderId]);

  const folderNotesData = noteData.filter(
    (item) => item.directoryId === selectedFolderId
  );
  folderNotesData.sort((a, b) => (a.id > b.id ? 1 : -1));
  console.log(folderNotesData);

  return (
    <Card>
      <ul className={classes.item}>
        {folderNotesData.map((item) => (
          <FolderNoteItem key={item.id} item={item} />
        ))}
      </ul>
    </Card>
  );
};

export default FolderNotes;
