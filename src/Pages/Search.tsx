import React from "react";
import FolderNoteItem from "../components/Notes/FolderNoteItem";
import Card from "../components/UI/Card";
import { useAppSelector } from "../hooks/redux";
import classes from "../components/Notes/FolderNotes.module.css";
const Search = () => {
  const filteredNote = useAppSelector((state) => state.appItem.filteredNote);

  return (
    <Card>
      <ul className={classes.item}>
        {filteredNote.map((item) => (
          <FolderNoteItem key={item.id} item={item} />
        ))}
      </ul>
    </Card>
  );
};

export default Search;
