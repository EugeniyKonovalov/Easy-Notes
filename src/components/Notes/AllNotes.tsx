import React from "react";
import NoteItem from "./NoteItem";
import classes from "./AllNotes.module.css";
import Card from "../UI/Card";
import { useAppSelector } from "../../hooks/redux";
const AllNotes = () => {
  const noteData = useAppSelector((state) => state.appItem.notes);
  return (
    <Card>
      <ul className={classes.item}>
        {noteData.map((item) => (
          <NoteItem key={item.id} item={item} />
        ))}
      </ul>
    </Card>
  );
};

export default AllNotes;
