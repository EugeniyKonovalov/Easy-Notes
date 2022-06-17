import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { HOME_ROUTE } from "../../utils/constants";
import Input from "../UI/Input";
import classes from "./Header.module.css";

const Header: React.FC = (props) => {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <header className={classes.header}>
      <Link to={HOME_ROUTE}>
        <h1 className={classes.logo}>Note Manager</h1>
      </Link>
      <form className={classes["form-search"]}>
        <Input
          ref={searchRef}
          label=""
          input={{
            id: "search",
            type: "textarea",
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
    </header>
  );
};

export default Header;
