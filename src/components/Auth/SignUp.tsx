import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import AuthForm from "./AuthForm";
import { useAppDispatch } from "../../hooks/redux";
import { authActions } from "../../store/authSlice";
import { useNavigate } from "react-router";
import { HOME_ROUTE, LOGIN } from "../../utils/constants";
import { uiActions } from "../../store/uiSlice";
import { Link } from "react-router-dom";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const signInHandler = (email: string, password: string) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
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
  const signIn = <Link to={LOGIN}>Sign In</Link>;

  return (
    <AuthForm title="Sign Up" submitHandler={signInHandler} authLink={signIn} />
  );
};

export default SignUp;
