import React from "react";
import { INoteItem } from "../../types/appDataTypes";
import BackArrowBtn from "../UI/BackArrowBtn";
import Card from "../UI/Card";
import classes from "./NoteItem.module.css";

const NoteItem: React.FC<INoteItem> = (props) => {
  return (
    <Card className={classes.note}>
      <h2 className={classes.title}>{props.item.title}</h2>
      <p className={classes.description}>{props.item.description}</p>
      <div className={classes.control}>
        <div>
          {props.item.tags.map((item, index) => (
            <span key={index} className={classes.tags}>
              {item}
            </span>
          ))}
        </div>
      </div>
      <BackArrowBtn />
    </Card>
  );
};

export default NoteItem;
