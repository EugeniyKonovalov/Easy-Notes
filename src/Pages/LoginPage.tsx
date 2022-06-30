import React from "react";
import SignIn from "../components/Auth/SignIn";

import Modal from "../components/UI/Modal";
import { useAppSelector } from "../hooks/redux";

const Auth = (
  <Modal>
    <SignIn />
  </Modal>
);

const Login: React.FC = (props) => {
  const showModal = useAppSelector((state) => state.ui.showModal);
  return <>{showModal && Auth}</>;
};

export default Login;
