import React from "react";
import { Link } from "react-router-dom";
import { INoteItem } from "../../types/appDataTypes";
import classes from "./FolderNotes.module.css";

const FolderNoteItem: React.FC<INoteItem> = (props) => {
  return (
    <>
      <li
        draggable={true}
        onDragStart={(event) => props.dragStartHandler(event, props.item)}
        onDragLeave={(event) => props.dragEndHandler(event)}
        onDragOver={(event) => props.dragOverHandler(event)}
        onDragEnd={(event) => props.dragEndHandler(event)}
        onDrop={(event) => props.dropHandler(event, props.item)}
      >
        <Link to={`${props.item.id}`}>
          <img
            src={require("./../../assets/img/default.ico")}
            width={174}
            height={174}
            alt="Default text icon"
          />
        </Link>
        <h3 className={classes.title}>{props.item.title}</h3>
      </li>
    </>
  );
};

export default FolderNoteItem;
