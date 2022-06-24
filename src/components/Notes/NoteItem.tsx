import React from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { appActions } from "../../store/appSlice";
import { INoteItem } from "../../types/appDataTypes";
import BackArrowBtn from "../UI/BackArrowBtn";
import ButtonMain from "../UI/ButtonMain";
import Card from "../UI/Card";
import classes from "./NoteItem.module.css";

const NoteItem: React.FC<INoteItem> = (props) => {
  const dispatch = useAppDispatch();
  const selectedNoteId = useAppSelector(
    (state) => state.appItem.selectedNoteId
  );
  const navigate = useNavigate();
  const removeNoteHandler = () => {
    dispatch(appActions.deleteNoteAsync(selectedNoteId));
    navigate(-1);
  };

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
      <div className="btn-group">
        <BackArrowBtn />
        <div className={classes["action-btn"]}>
          <ButtonMain text="Replace" />
          <ButtonMain text="Remove" onClick={removeNoteHandler} />
        </div>
      </div>
    </Card>
  );
};

export default NoteItem;
