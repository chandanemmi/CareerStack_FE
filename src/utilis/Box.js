import React from "react";

function Box(props) {
  return (
    <div className="Box" style={{ background: props.color }}>
      {props.children}
    </div>
  );
}

export default Box;
