import React, { useCallback } from "react";
import { useAppDispatch } from "../../hooks/redux";
import UseInput from "../../hooks/useInput";
import { authActions } from "../../store/authSlice";
import { uiActions } from "../../store/uiSlice";
import ButtonMain from "../UI/ButtonMain";
import Input from "../UI/Input";
import classes from "./AuthForm.module.css";

const AuthForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const isNotEmpty = (value: string) => value.trim() !== "";
  const isEmail = (value: string) => value.includes("@");
  const isPasswordLong = (value: string) => value.trim().length >= 8;
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    changeHandler: nameChangehandler,
    blurHandler: nameBlurHandler,
    resetInput: nameReset,
  } = UseInput(isNotEmpty);
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    changeHandler: emailChangehandler,
    blurHandler: emailBlurHandler,
    resetInput: emailReset,
  } = UseInput(isNotEmpty && isEmail);
  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    changeHandler: passwordChangehandler,
    blurHandler: passwordBlurHandler,
    resetInput: passwordReset,
  } = UseInput(isNotEmpty && isPasswordLong);

  let formIsValid = false;
  if (nameIsValid && emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const submitHandler = useCallback(
    (event: React.FormEvent) => {
      event!.preventDefault();
      dispatch(
        authActions.login({
          name: enteredName,
          email: enteredEmail,
          password: enteredPassword,
        })
      );
      if (!formIsValid) {
        return;
      }
      nameReset();
      emailReset();
      passwordReset();
      localStorage.setItem("token", enteredName);
      dispatch(uiActions.onToggle());
    },
    [
      dispatch,
      emailReset,
      enteredEmail,
      enteredName,
      enteredPassword,
      formIsValid,
      nameReset,
      passwordReset,
    ]
  );

  const nameClasses = nameHasError
    ? `${classes.control} ${classes.invalid}`
    : classes.control;
  const emailClasses = emailHasError
    ? `${classes.control} ${classes.invalid}`
    : classes.control;
  const passwordClasses = passwordHasError
    ? `${classes.control} ${classes.invalid}`
    : classes.control;

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={nameClasses}>
        <Input
          label="Name"
          input={{
            value: enteredName,
            id: "name",
            type: "text",
            placeholder: "Enter your name",
          }}
          onChange={nameChangehandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && (
          <p className={classes["error-text"]}>Please enter name!</p>
        )}
      </div>
      <div className={emailClasses}>
        <Input
          label="E-mail"
          input={{
            value: enteredEmail,
            id: "email",
            type: "e-mail",
            placeholder: "Enter your e-mail",
          }}
          onChange={emailChangehandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className={classes["error-text"]}>Please enter a valid e-mail!</p>
        )}
      </div>
      <div className={passwordClasses}>
        <Input
          label="Password"
          input={{
            value: enteredPassword,
            id: "password",
            type: "password",
            placeholder: "Enter your password",
          }}
          onChange={passwordChangehandler}
          onBlur={passwordBlurHandler}
        />
        {passwordHasError && (
          <p className={classes["error-text"]}>
            Please enter a valid password! Min 8 characters
          </p>
        )}
      </div>
      <div className={classes["form-btn"]}>
        <ButtonMain text="Login" disabled={!formIsValid} />
      </div>
    </form>
  );
};

export default AuthForm;
