import React from "react";
import SignUp from "../components/Auth/SignUp";

import Modal from "../components/UI/Modal";
import { useAppSelector } from "../hooks/redux";

const Auth = (
  <Modal>
    <SignUp />
  </Modal>
);

const Register: React.FC = (props) => {
  const showModal = useAppSelector((state) => state.ui.showModal);
  return <>{showModal && Auth}</>;
};

export default Register;
