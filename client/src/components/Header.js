import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Payments from "./Payments";

const HeaderContent = user => {
  switch (user) {
    case null:
      return "";
    case false:
      return (
        <li>
          <a className="btn waves-effect waves-light green" href="/auth/google">
            Login with Google
          </a>
        </li>
      );
    default:
      return (
        <>
          <li style={{ margin: "0 20px" }}>Credits: {user.credits}</li>
          <li>
            <Payments />
          </li>
          <li>
            <a className="btn waves-effect waves-light teal" href="/api/logout">
              Log out
            </a>
          </li>
        </>
      );
  }
};

const Header = ({ user }) => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link
          to={user ? "/surveys" : "/"}
          className="left brand-logo"
          style={{ left: "2%" }}
        >
          Emaily
        </Link>
        <ul className="right">{HeaderContent(user)}</ul>
      </div>
    </nav>
  );
};
const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};
export default connect(mapStateToProps)(Header);
