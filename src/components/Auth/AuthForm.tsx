import React, { useCallback } from "react";
import { useLocation } from "react-router";
import { useAppDispatch } from "../../hooks/redux";
import UseInput from "../../hooks/useInput";
import { uiActions } from "../../store/uiSlice";
import { IAuthForm } from "../../types/authDataTypes";
import { LOGIN } from "../../utils/constants";
import ButtonMain from "../UI/ButtonMain";
import Input from "../UI/Input";
import classes from "./AuthForm.module.css";

const AuthForm: React.FC<IAuthForm> = ({ title, submitHandler, authLink }) => {
  const isNotEmpty = (value: string) => value.trim() !== "";
  const isEmail = (value: string) => value.includes("@");
  const isPasswordLong = (value: string) => value.trim().length >= 8;
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isLogin = location.pathname === LOGIN;
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
  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = useCallback(
    (event: React.FormEvent) => {
      event!.preventDefault();
      submitHandler(enteredEmail, enteredPassword);
      if (!formIsValid) {
        return;
      }
      emailReset();
      passwordReset();
      dispatch(uiActions.onToggle());
    },
    [
      dispatch,
      emailReset,
      enteredEmail,
      enteredPassword,
      formIsValid,
      passwordReset,
      submitHandler,
    ]
  );

  const emailClasses = emailHasError
    ? `${classes.control} ${classes.invalid}`
    : classes.control;
  const passwordClasses = passwordHasError
    ? `${classes.control} ${classes.invalid}`
    : classes.control;

  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <h2 className={classes.title}>{title}</h2>
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
      <div className={classes.auth}>
        <div className={classes["auth-link"]}>
          {isLogin ? "Don't have acount? " : "Back to "}
          {authLink}
        </div>
        <div className={classes["form-btn"]}>
          <ButtonMain text="Login" disabled={!formIsValid} />
        </div>
      </div>
    </form>
  );
};

export default AuthForm;
