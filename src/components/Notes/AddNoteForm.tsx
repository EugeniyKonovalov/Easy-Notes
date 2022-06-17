import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { appActions } from "../../store/appSlice";
import Card from "../UI/Card";
import classes from "./NoteItem.module.css";

const AddNoteForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<string>();
  const dispatch = useAppDispatch();
  const selectedFolderId = useAppSelector(
    (state) => state.appItem.selectedFolderId
  );

  const submitNotesHandler = (event: React.FormEvent) => {
    event?.preventDefault();
    dispatch(
      appActions.addNoteAsync({
        directoryId: selectedFolderId,
        title,
        description,
        tags,
      })
    );
  };

  return (
    <Card>
      <form onSubmit={submitNotesHandler} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="author"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="text"
            rows={10}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className={classes.control}>
          {/* {notesData.map((item) => (
              <span className={classes.tags}>{item.tags}</span>
            ))} */}

          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            id="tags"
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <div className="btn-group">
          <NavLink to="/">
            <img
              src={require("../../assets/img/prev-arrow.ico")}
              width={44}
              height={44}
              alt="Previous arrow"
            />
          </NavLink>

          <button className="btn">Add Note</button>
        </div>
      </form>
    </Card>
  );
};

export default AddNoteForm;
