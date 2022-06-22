import React from "react";
import AuthForm from "../components/Auth/AuthForm";
import Modal from "../components/UI/Modal";
import { useAppSelector } from "../hooks/redux";

const Auth = (
  <Modal>
    <AuthForm />
  </Modal>
);

const Login: React.FC = (props) => {
  const showModal = useAppSelector((state) => state.ui.showModal);
  console.log(showModal);
  return <>{showModal && Auth}</>;
};

export default Login;
