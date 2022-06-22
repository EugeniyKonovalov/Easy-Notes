import React, { useEffect, useState } from "react";
import FolderNoteItem from "./FolderNoteItem";
import classes from "./FolderNotes.module.css";
import Card from "../UI/Card";
import { INote } from "../../types/appDataTypes";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useParams } from "react-router-dom";
import { appActions } from "../../store/appSlice";

const FolderNotes: React.FC = () => {
  const noteData = useAppSelector((state) => state.appItem.notes);
  const selectedFolderId = useAppSelector(
    (state) => state.appItem.selectedFolderId
  );
  const folderNotesData = noteData.filter(
    (item) => item.directoryId === selectedFolderId
  );
  folderNotesData.sort((a, b) => (a.id > b.id ? 1 : -1));
  const dispatch = useAppDispatch();
  const params = useParams();
  const { folderId } = params;
  const [currentNote, setCurrentNote] = useState<INote>(null);

  const dragStartHandler = (event: React.DragEvent, item: INote) => {
    setCurrentNote(item);
  };

  const dragOverHandler = (event: React.DragEvent) => {
    event.preventDefault();
    event.currentTarget.className = classes["drag-over"];
  };
  const dragEndHandler = (event: React.DragEvent) => {
    event.currentTarget.className = classes["drag-end"];
  };

  const dropHandler = (event: React.DragEvent, item: INote) => {
    event.preventDefault();
    event.currentTarget.className = classes["drag-end"];
    const draggableNote = folderNotesData.map((note) =>
      note.id === item.id
        ? { ...note, position: currentNote.position }
        : note.id === currentNote.id
        ? { ...note, position: item.position }
        : note
    );
    dispatch(appActions.dragAndDropNote(draggableNote));
  };
  const sortNotes = (a: INote, b: INote) => (a.position > b.position ? 1 : -1);
  useEffect(() => {
    dispatch(appActions.setSelectedFolderId(Number(folderId)));
  }, [dispatch, folderId]);
  return (
    <Card>
      <ul className={classes.item}>
        {folderNotesData.sort(sortNotes).map((item) => (
          <FolderNoteItem
            key={item.id}
            item={item}
            dragStartHandler={dragStartHandler}
            dragOverHandler={dragOverHandler}
            dragEndHandler={dragEndHandler}
            dropHandler={dropHandler}
          />
        ))}
      </ul>
    </Card>
  );
};

export default FolderNotes;
