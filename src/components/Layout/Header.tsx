import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { uiActions } from "../../store/uiSlice";
import { HOME_ROUTE, LOGIN } from "../../utils/constants";
import ButtonMain from "../UI/ButtonMain";
import Input from "../UI/Input";
import classes from "./Header.module.css";

const Header: React.FC = (props) => {
  const [searchText, setSearchText] = useState<string>("");
  const dispatch = useAppDispatch();
  const showModalhandler = () => {
    dispatch(uiActions.onToggle());
  };

  return (
    <header className={classes.header}>
      <Link to={HOME_ROUTE}>
        <h1 className={classes.logo}>Note Manager</h1>
      </Link>
      <form className={classes["form-search"]}>
        <Input
          onChange={(event) => setSearchText(event.target.value)}
          label=""
          input={{
            id: "search",
            type: "text",
            placeholder: "Search",
          }}
        />
        <img
          src={require("../../assets/img/search.ico")}
          width={36}
          height={36}
          alt="Search icon"
        />
      </form>
      <div className={classes["login-btn"]}>
        <NavLink to={LOGIN}>
          <ButtonMain text="Login" onClick={showModalhandler} />
        </NavLink>
        <ButtonMain text="User" />
      </div>
    </header>
  );
};

export default Header;
