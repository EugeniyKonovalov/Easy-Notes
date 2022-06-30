import React, { useCallback, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useAuth } from "../../hooks/useAuth";
import { appActions } from "../../store/appSlice";
import { authActions } from "../../store/authSlice";
import { uiActions } from "../../store/uiSlice";
import { HOME_ROUTE, LOGIN, SEARCH } from "../../utils/constants";
import Menu from "./Menu";
import ButtonMain from "../UI/ButtonMain";
import Input from "../UI/Input";
import classes from "./Header.module.css";

const Header: React.FC = (props) => {
  const [searchText, setSearchText] = useState<string>("");
  const [show, setShow] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuth, email } = useAuth();
  const noteData = useAppSelector((state) => state.appItem.notes);

  const showModalhandler = () => {
    dispatch(uiActions.onToggle());
  };

  const filteredNote = noteData.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const noteSearchHandler = (e: React.FormEvent) => {
    setShow(!show);
    setSearchText((e.target as HTMLElement).textContent);
  };

  const routeSearchNoteHandler = () => {
    dispatch(appActions.filteredNote(filteredNote));
    searchText !== "" && navigate(SEARCH);
  };

  const inputShowHandler = () => setShow(true);

  const logoutHandler = useCallback(() => {
    dispatch(authActions.removeUser());
    navigate(HOME_ROUTE, { replace: true });
  }, [dispatch, navigate]);
  return (
    <header
      className={
        isAuth
          ? `${classes.header} ${classes["menu-header"]}`
          : `${classes.header} ${classes["hide-menu-header"]}`
      }
    >
      <h1>
        <Link to={HOME_ROUTE} className={classes.logo}>
          Easy Notes
        </Link>
      </h1>
      <div className={isAuth ? classes.dropdown : classes["hide-menu"]}>
        <button className={classes["drop-btn"]}>Menu</button>
        <div className={classes["dropdown-content"]}>
          <Menu />
        </div>
      </div>
      <form className={classes["form-search"]}>
        <Input
          onChange={(event) => setSearchText(event.target.value)}
          onClick={inputShowHandler}
          label=""
          input={{
            id: "search",
            type: "text",
            placeholder: "Search",
            value: searchText,
          }}
        />
        <ul className={classes.autocomplete}>
          {searchText && show
            ? filteredNote.map((note) => (
                <li key={note.id} onClick={noteSearchHandler}>
                  {note.title}
                </li>
              ))
            : null}
        </ul>
        <img
          src={require("../../assets/img/search.ico")}
          width={36}
          height={36}
          alt="Search icon"
          onClick={routeSearchNoteHandler}
        />
      </form>
      <div className={classes["login-btn"]}>
        {!isAuth && (
          <NavLink to={LOGIN}>
            <ButtonMain text="Login" onClick={showModalhandler} />
          </NavLink>
        )}
        {isAuth && <ButtonMain text="Logout" onClick={logoutHandler} />}
        {isAuth && <ButtonMain text={email} />}
      </div>
    </header>
  );
};

export default Header;
