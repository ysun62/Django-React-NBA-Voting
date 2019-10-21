import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import "./SideDrawer.css";
import { NavLink, Link } from "react-router-dom";

const SideDrawer = props => {
  let sideDrawerClasses = "side-drawer";
  if (props.sideDrawerOpen) {
    sideDrawerClasses = "side-drawer open";
  }

  let subMenuClasses = "sub-menu";
  if (props.subMenuOpen) {
    subMenuClasses = "sub-menu open";
  }
  return (
    <nav
      className={sideDrawerClasses}
      style={{
        boxShadow: props.sideDrawerOpen
          ? "7px 0px 5px -5px rgba(0,0,0,0.5)"
          : "none"
      }}
    >
      <ul className="main-menu">
        <li>
          <Link
            to="/"
            onClick={() => {
              props.subMenuCloseHandler();
              props.sideDrawerCloseHandler();
            }}
          >
            Home
          </Link>
        </li>
        <li className="roster">
          <div
            className="roster-div margin-left"
            onClick={props.subMenuOpenHandler}
            style={{ color: props.subMenuOpen && "#1D428A" }}
          >
            Roster
            <i className="fas fa-sort-down sort-down"></i>
          </div>
          <ul className={subMenuClasses}>
            <li>
              <NavLink
                to="/roster/warriors"
                activeClassName="active"
                onClick={props.sideDrawerCloseHandler}
              >
                Warriors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/roster/lakers"
                activeClassName="active"
                onClick={props.sideDrawerCloseHandler}
              >
                Lakers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/roster/rockets"
                activeClassName="active"
                onClick={props.sideDrawerCloseHandler}
              >
                Rockets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/roster/nets"
                activeClassName="active"
                onClick={props.sideDrawerCloseHandler}
              >
                Nets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/roster/clippers"
                activeClassName="active"
                onClick={props.sideDrawerCloseHandler}
              >
                Clippers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/roster/bucks"
                activeClassName="active"
                onClick={props.sideDrawerCloseHandler}
              >
                Bucks
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="seperate-line">
          <div className="line"></div>
        </li>
        <li className="login-li">
          {props.auth.isAuthenticated ? (
            <Link
              to="/"
              onClick={() => {
                props.subMenuCloseHandler();
                props.sideDrawerCloseHandler();
                props.logout();
              }}
            >
              Sign Out
            </Link>
          ) : (
            <Link
              to="/login"
              onClick={() => {
                props.subMenuCloseHandler();
                props.sideDrawerCloseHandler();
              }}
            >
              Sign In
            </Link>
          )}
        </li>
        <li>
          {!props.auth.isAuthenticated && (
            <Link
              to="/register"
              onClick={() => {
                props.subMenuCloseHandler();
                props.sideDrawerCloseHandler();
              }}
            >
              Register
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

SideDrawer.propTypes = {
  sideDrawerOpen: PropTypes.bool.isRequired,
  sideDrawerCloseHandler: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(SideDrawer);
