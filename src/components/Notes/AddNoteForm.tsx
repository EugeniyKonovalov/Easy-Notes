import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { appActions } from "../../store/appSlice";
import BackArrowBtn from "../UI/BackArrowBtn";
import ButtonMain from "../UI/ButtonMain";
import Card from "../UI/Card";
import classes from "./NoteItem.module.css";
import TagsItemForm from "./TagsItemForm";

const AddNoteForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const selectedFolderId = useAppSelector(
    (state) => state.appItem.selectedFolderId
  );
  const navigate = useNavigate();
  const submitNotesHandler = (event: React.FormEvent) => {
    event!.preventDefault();
    dispatch(
      appActions.addNoteAsync({
        directoryId: selectedFolderId,
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
          <ButtonMain text="Add Note" />
        </div>
      </form>
    </Card>
  );
};

export default AddNoteForm;
