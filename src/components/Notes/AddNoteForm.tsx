import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { appActions } from "../../store/appSlice";
import { INoteItem } from "../../types/appDataTypes";
import BackArrowBtn from "../UI/BackArrowBtn";
import ButtonMain from "../UI/ButtonMain";
import Card from "../UI/Card";
import classes from "./NoteItem.module.css";
import TagsItemForm from "./TagsItemForm";

const AddNoteForm: React.FC<INoteItem> = (props) => {
  const selectedFolderId = useAppSelector(
    (state) => state.appItem.selectedFolderId
  );
  const selectedNoteId = useAppSelector(
    (state) => state.appItem.selectedNoteId
  );
  const currentPosition = useAppSelector(
    (state) => state.appItem.currentPosition
  );
  const noteData = useAppSelector((state) => state.appItem.notes);
  const selectedNoteForReplace = noteData.filter(
    (item) => item.id === selectedNoteId
  );
  const selectedNoteTitle = selectedNoteForReplace
    .map((item) => item.title)
    .toString();
  const selectedNoteDescription = selectedNoteForReplace
    .map((item) => item.description)
    .toString();
  const selectedNoteTags = selectedNoteForReplace
    .map((item) => item.tags)
    .toString();
  const isReplace = useAppSelector((state) => state.ui.isReplace);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>(
    !isReplace ? "" : selectedNoteTitle
  );
  const [description, setDescription] = useState<string>(
    !isReplace ? "" : selectedNoteDescription
  );
  const [tags, setTags] = useState<string[]>(
    !isReplace ? [] : [selectedNoteTags]
  );

  const submitNotesHandler = (event: React.FormEvent) => {
    event!.preventDefault();
    dispatch(
      !isReplace
        ? appActions.addNoteAsync({
            directoryId: selectedFolderId,
            title,
            description,
            tags,
          })
        : appActions.replaceNoteAsync({
            id: selectedNoteId,
            directoryId: selectedFolderId,
            position: 1,
            title,
            description,
            tags,
          })
    );
    setTitle("");
    setDescription("");
    navigate(-1);
  };

  return (
    <Card>
      <form onSubmit={submitNotesHandler} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="author"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="text"
            rows={10}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <TagsItemForm tags={tags} setTags={setTags} />

        <div className="btn-group">
          <BackArrowBtn />
          <ButtonMain text={!isReplace ? "Add Note" : "Replase Note"} />
        </div>
      </form>
    </Card>
  );
};

export default AddNoteForm;
