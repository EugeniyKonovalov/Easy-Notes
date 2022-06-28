import React, { useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { appActions } from "../../store/appSlice";
import { INoteItem } from "../../types/appDataTypes";
import { FOLDERS_ROUTE } from "../../utils/constants";
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
  const isReplace = useAppSelector((state) => state.ui.isReplace);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>(
    !isReplace ? "" : props.item.title
  );
  const [description, setDescription] = useState<string>(
    !isReplace ? "" : props.item.description
  );
  const [tags, setTags] = useState<string[]>(!isReplace ? [] : props.item.tags);

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
    navigate(FOLDERS_ROUTE + selectedFolderId);
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
