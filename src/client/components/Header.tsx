import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "../reducers";

type IHeaderProps = {
  isAuth: boolean;
};
const Header = ({ isAuth }: IHeaderProps) => {
  const authButton = isAuth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );

  return (
    <nav className="main-menu flex justify-between">
      <ul>
        <li>
          <Link to="/">React SSR</Link>
        </li>
      </ul>
      <div className="main-menu">
        <ul>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/admins">Admins</Link>
          </li>
          <li className="justify-self-end">{authButton}</li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }: RootState) => ({ isAuth: auth?.isAuth });

export default connect(mapStateToProps)(Header);
