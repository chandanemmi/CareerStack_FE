import React from "react";
import Container from "../../../utilis/container";
import Box from "../../../utilis/Box";
import SmallBox from "../../../utilis/BigCard";
import Card from "../../../utilis/Card2";

function JobRoles() {
  return (
    <Container>
      <div className="JobRoleBox">
        <div className="JobCardButton">
          <button className="button">ALL</button>
        </div>
        <Card>
          {" "}
          <div className="topic">python Engineering</div>
          <div className="salary">salary 10-20k</div>
          <div className="jobcard trend">Trending</div>
        </Card>
        <Card>
          {" "}
          <div className="topic">python Engineering</div>
          <div className="salary">salary 10-20k</div>
          <div className="jobcard trend">Trending</div>
        </Card>
        <Card>
          {" "}
          <div className="topic">python Engineering</div>
          <div className="salary">salary 10-20k</div>
          <div className="jobcard trend">Trending</div>
        </Card>
        <Card>
          {" "}
          <div className="topic">python Engineering</div>
          <div className="salary">salary 10-20k</div>
          <div className="jobcard trend">Trending</div>
        </Card>
      </div>
    </Container>
  );
}

export default JobRoles;
