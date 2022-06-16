import React from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { appActions } from "../../store/appSlice";
import { INote } from "../../types/appDataTypes";

interface INoteItem {
  item: INote;
}

const NoteItem: React.FC<INoteItem> = (props) => {
  const dispatch = useAppDispatch();
  const selectedNoteIdHandler = () => {
    dispatch(appActions.setSelectedNoteId(props.item.id));
  };

  const params = useParams();
  console.log(params.noteId);
  return (
    <>
      <li>
        <Link to={`${props.item.id}`}>
          <img
            src="../../../public/img/default.ico"
            width={172}
            height={172}
            alt="Text document"
            onClick={selectedNoteIdHandler}
          />
        </Link>
        <h3>{props.item.title}</h3>
      </li>
    </>
  );
};

export default NoteItem;
