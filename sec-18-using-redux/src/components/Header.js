import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import { isAuthenticatedActions } from "../store/auth";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.isAuthenticated.isAuthenticated
  );

  const logoutHanlder = () => {
    dispatch(isAuthenticatedActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated ? (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHanlder}>Logout</button>
            </li>
          </ul>
        </nav>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
