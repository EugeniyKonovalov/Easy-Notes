import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../UI/Card";

import classes from "./NotesItemForm.module.css";
const NotesItemForm = () => {
  const submitNotesHandler = (event: React.FormEvent) => {
    event?.preventDefault();
  };

  return (
    <Card>
      <form onSubmit={submitNotesHandler} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" id="author" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="text" rows={10}></textarea>
        </div>
        <div className={classes.control}>
          <p>Tags</p>
          <div>
            <span className={classes.tags}>Important</span>
            <span className={classes.tags}>Private</span>
            <span className={classes.tags}>Family</span>
          </div>
        </div>
        <div className="btn-group">
          <NavLink to="/">
            <img
              src="./img/prev-arrow.ico"
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

export default NotesItemForm;
