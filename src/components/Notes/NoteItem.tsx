import React from "react";
import { INoteItem } from "../../types/appDataTypes";
import Card from "../UI/Card";
import classes from "./NoteItem.module.css";

const NoteItem: React.FC<INoteItem> = (props) => {
  return (
    <Card>
      <h2 className={classes.title}>{props.item.title}</h2>
      <p className={classes.description}>{props.item.description}</p>
      <div className={classes.control}>
        <span className={classes.tags}>{props.item.tags}</span>
      </div>
    </Card>
  );
};

export default NoteItem;
