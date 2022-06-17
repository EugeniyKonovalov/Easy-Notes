import React, { useEffect } from "react";
import { useParams } from "react-router";
import NoteItem from "../components/Notes/NoteItem";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { appActions } from "../store/appSlice";

const NoteDetail: React.FC = () => {
  const dispatch = useAppDispatch();
  const notesData = useAppSelector((state) => state.appItem.notes);
  const selectedNoteId = useAppSelector(
    (state) => state.appItem.selectedNoteId
  );
  const params = useParams();
  const { noteId } = params;

  useEffect(() => {
    dispatch(appActions.setSelectedNoteId(Number(noteId)));
  }, [dispatch, noteId]);
  const noteDetailData = notesData.filter((item) => item.id === selectedNoteId);

  return (
    <>
      {noteDetailData.map((item) => (
        <NoteItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default NoteDetail;
