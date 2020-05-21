import React from "react";
import Container from "../../utilis/container";
function jobRole() {
  function Handler() {
    alert("Hello");
  }
  return (
    <Container>
      <div className="JobRoleBox">
        <div className="JobCardBut">
          <button onClick={Handler} className="but">
            ALL
          </button>
        </div>
        <div className="JobCard">
          <div className="topic">python Engineering</div>
          <div className="sal">salary 10-20k</div>
          <div className="jcard1 trend">Trending</div>
        </div>

        <div className="JobCard">
          <div className="topic">python Engineering</div>
          <div className="sal">salary 10-20k</div>
          <div className="jcard1 trend">Trending</div>
        </div>
        <div className="JobCard">
          <div className="topic">python Engineering</div>
          <div className="sal">salary 10-20k</div>
          <div className="jcard1 trend">Trending</div>
        </div>
        <div className="JobCard">
          <div className="topic">python Engineering</div>
          <div className="sal">salary 10-20k</div>
          <div className="jcard1 trend">Trending</div>
        </div>
      </div>
    </Container>
  );
}

export default jobRole;
