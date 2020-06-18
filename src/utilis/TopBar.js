import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faArrowLeft,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
const TopB = {
  position: "absolute",
  background: "#80B4FF",
  height: "20vh",
  top: "0",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  boxShadow: "10px 10px 20px rgba(black, 0.1)",
  JustifyItems: "center",
};

const Button = ({ onClick, children, className = " ", ButtonStyle }) => {
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      style={ButtonStyle}>
      {children}
    </button>
  );
};
const TopBar = (props) => {
  const [toggle, setToggle] = useState(0);
  return (
    <>
      <div className="" style={TopB}>
        <div style={{ flex: "1" }}></div>
        {props.children}
      </div>
    </>
  );
};

export default TopBar;
