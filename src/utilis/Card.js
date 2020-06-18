import React from "react";

function Card(props) {
  return (
    <div className="Card" style={{ background: props.color }}>
      {props.children}
    </div>
  );
}

export default Card;
