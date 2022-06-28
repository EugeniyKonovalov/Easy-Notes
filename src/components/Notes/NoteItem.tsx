import React from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { appActions } from "../../store/appSlice";
import { uiActions } from "../../store/uiSlice";
import { INoteItem } from "../../types/appDataTypes";
import BackArrowBtn from "../UI/BackArrowBtn";
import ButtonMain from "../UI/ButtonMain";
import Card from "../UI/Card";
import AddNoteForm from "./AddNoteForm";
import classes from "./NoteItem.module.css";

const NoteItem: React.FC<INoteItem> = (props) => {
  const dispatch = useAppDispatch();
  const selectedNoteId = useAppSelector(
    (state) => state.appItem.selectedNoteId
  );
  const isReplace = useAppSelector((state) => state.ui.isReplace);

  const navigate = useNavigate();
  const replaceNoteHandler = () => {
    dispatch(uiActions.onReplace());
  };

  const removeNoteHandler = () => {
    dispatch(appActions.deleteNoteAsync(selectedNoteId));
    navigate(-1);
  };

  return (
    <>
      {!isReplace && (
        <Card className={classes.note}>
          <h2 className={classes.title}>{props.item.title}</h2>
          <p className={classes.description}>{props.item.description}</p>
          <div className={classes.control}>
            <div>
              {props.item.tags.map((item, index) => (
                <span
                  key={index}
                  className={`${classes.tags} ${classes["no-pointer"]}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="btn-group">
            <BackArrowBtn />
            <div className={classes["action-btn"]}>
              <ButtonMain text="Replace" onClick={replaceNoteHandler} />
              <ButtonMain text="Remove" onClick={removeNoteHandler} />
            </div>
          </div>
        </Card>
      )}
      {isReplace && <AddNoteForm item={props.item} />}
    </>
  );
};

export default NoteItem;
