import React from "react";
import { IBtn } from "../../types/mainBtnTypes";

const ButtonMain: React.FC<IBtn> = (props) => {
  return (
    <button className="btn" onClick={props.onClick} disabled={props.disabled}>
      {props.text}
    </button>
  );
};

export default ButtonMain;
