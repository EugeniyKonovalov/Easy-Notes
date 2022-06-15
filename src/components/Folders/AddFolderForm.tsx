import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { folderActions } from "../../store/appSlice";
import Card from "../UI/Card";
import classes from "./AddFolderForm.module.css";

const AddFolderForm: React.FC = (props) => {
  const [currentName, setCurrentName] = useState<string>("");
  const dispatch = useAppDispatch();
  const selectedFolderId = useAppSelector(
    (state) => state.folderItem.selectedFolderId
  );

  const submitHandler = (event: React.FormEvent) => {
    event!.preventDefault();
    dispatch(
      folderActions.addFolderAsync({
        parentId: selectedFolderId,
        name: currentName,
      })
    );
  };

  return (
    <Card>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="folder">Add folder</label>
          <input
            type="text"
            id="folder"
            onChange={(e) => setCurrentName(e.target.value)}
          />
        </div>
        <div className="btn-group">
          <button className="btn">Add Folder</button>
        </div>
      </form>
    </Card>
  );
};
export default AddFolderForm;
