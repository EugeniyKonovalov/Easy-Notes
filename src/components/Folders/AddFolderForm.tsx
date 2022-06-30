import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { appActions } from "../../store/appSlice";
import { HOME_ROUTE } from "../../utils/constants";
import BackArrowBtn from "../UI/BackArrowBtn";
import ButtonMain from "../UI/ButtonMain";

import Card from "../UI/Card";
import classes from "./AddFolderForm.module.css";

const AddFolderForm: React.FC = (props) => {
  const [currentName, setCurrentName] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectedFolderId = useAppSelector(
    (state) => state.appItem.selectedFolderId
  );

  const submitHandler = (event: React.FormEvent) => {
    event!.preventDefault();
    dispatch(
      appActions.addFolderAsync({
        parentId: selectedFolderId,
        name: currentName,
      })
    );

    setCurrentName("");
    navigate(HOME_ROUTE);
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
          <BackArrowBtn />
          <ButtonMain text="Add Folder" />
        </div>
      </form>
    </Card>
  );
};
export default AddFolderForm;
