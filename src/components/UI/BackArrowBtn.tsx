import React from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { uiActions } from "../../store/uiSlice";

const BackArrowBtn: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isReplace = useAppSelector((state) => state.ui.isNoteReplace);
  const backToOnehandler = () => {
    isReplace && dispatch(uiActions.onNoteReplace());
    navigate(-1);
  };

  return (
    <div className="back-arrow-btn">
      <img
        src={require("../../assets/img/prev-arrow.ico")}
        width={44}
        height={44}
        alt="Previous arrow"
        onClick={backToOnehandler}
      />
    </div>
  );
};

export default BackArrowBtn;
