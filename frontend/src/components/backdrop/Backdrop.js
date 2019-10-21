import React from "react";
import "./Backdrop.css";
import PropTypes from "prop-types";

function Backdrop(props) {
  return (
    <div
      className="backdrop"
      onClick={() => {
        props.sideDrawerCloseHandler();
        props.subMenuCloseHandler();
      }}
    ></div>
  );
}

Backdrop.propTypes = {
  sideDrawerCloseHandler: PropTypes.func.isRequired
};

export default Backdrop;
