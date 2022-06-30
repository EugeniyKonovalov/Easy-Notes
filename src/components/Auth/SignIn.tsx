import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AuthForm from "./AuthForm";
import { authActions } from "../../store/authSlice";
import { HOME_ROUTE, REGISTRATION } from "../../utils/constants";
import { useAppDispatch } from "../../hooks/redux";
import { useNavigate } from "react-router";
import { uiActions } from "../../store/uiSlice";
import { Link } from "react-router-dom";

const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loginHandler = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          authActions.setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success",
            message: "Send auth data success!",
          })
        );
        navigate(HOME_ROUTE, { replace: true });
      })
      .catch((error) => {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error",
            message: error.message,
          })
        );
      });
  };

  const registration = <Link to={REGISTRATION}>Register</Link>;

  return (
    <AuthForm
      title="Sign In"
      submitHandler={loginHandler}
      authLink={registration}
    />
  );
};

export default SignIn;
