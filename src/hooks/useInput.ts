import { useState } from "react";

const UseInput = (validateValue: any) => {
  const [enteredValue, setEnteredValue] = useState<string>("");
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEnteredValue(event.target.value);
  };

  const blurHandler = (): void => {
    setIsTouched(true);
  };

  const resetInput = (): void => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    changeHandler,
    blurHandler,
    resetInput,
  };
};

export default UseInput;
