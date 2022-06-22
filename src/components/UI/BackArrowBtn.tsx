import React from "react";
import { useNavigate } from "react-router";

const BackArrowBtn: React.FC = () => {
  const navigate = useNavigate();

  const backToOnehandler = () => {
    navigate(-1);
  };

  return (
    <div className="back-arrow-btn">
      <img
        src={require("../../assets/img/prev-arrow.ico")}
        width={44}
        height={44}
        alt="Previous arrow"
        onClick={backToOnehandler}
      />
    </div>
  );
};

export default BackArrowBtn;
