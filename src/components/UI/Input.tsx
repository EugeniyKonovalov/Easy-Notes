import React from "react";
import { inputsType } from "../../types/inputTypes";

const Input: React.FC<inputsType> = (props) => {
  return (
    <>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        onChange={props.onChange}
        onBlur={props.onBlur}
        onClick={props.onClick}
        {...props.input}
      />
    </>
  );
};

export default Input;
