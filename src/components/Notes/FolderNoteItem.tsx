import React from "react";
import { Link } from "react-router-dom";
import { INoteItem } from "../../types/appDataTypes";
import classes from "./FolderNotes.module.css";

const FolderNoteItem: React.FC<INoteItem> = (props) => {
  return (
    <>
      <li>
        <Link to={`${props.item.id}`}>
          <img
            src={require("./../../assets/img/default.ico")}
            width={172}
            height={172}
            alt="Text document"
          />
        </Link>
        <h3 className={classes.title}>{props.item.title}</h3>
      </li>
    </>
  );
};

export default FolderNoteItem;
