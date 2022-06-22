import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../hooks/redux";
import { uiActions } from "../../store/uiSlice";
import AppChildrensType from "../../types/AppPropTypes";
import classes from "./Modal.module.css";

const Backdrop: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const hideModalHandler = () => {
    dispatch(uiActions.onToggle());
    navigate(-1);
  };
  return <div className={classes.backdrop} onClick={hideModalHandler} />;
};

const ModalOverlay: React.FC<AppChildrensType> = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};
const portalElement = document.getElementById("overlay") as HTMLElement;

const Modal: React.FC<AppChildrensType> = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
