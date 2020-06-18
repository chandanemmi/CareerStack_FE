import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faArrowLeft,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import TopBar from "../../../utilis/TopBar";
import Container from "../../../utilis/container";
import Box from "../../../utilis/Box";
import SmallBox from "../../../utilis/BigCard";
import Card from "../../../utilis/Card2";

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

function JobRoles() {
  const [toggle, setToggle] = useState(0);
  return (
    <>
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
      <TopBar>
        {" "}
        <div
          style={{
            flex: "1",
          }}>
          <br />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              fontSize: "20px",
              paddingTop: "1rem",
              paddingRight: "0.5rem",
              flex: "1",
              height: "auto",
            }}>
            {toggle && <input type="text" placeholder="Search" />}

            <Button
              ButtonStyle={{
                marginRight: "0.5rem",
                // color: "#ffff",
                // background: "none",
                color: "#80B4FF",
                lineHeight: "30px",
                width: "30px",
                background: "#ffff",
                borderRadius: "50px",
              }}
              onClick={() => {
                setToggle(!toggle);
              }}>
              <FontAwesomeIcon icon={faSearch} />
            </Button>

            <Button
              ButtonStyle={{
                color: "#11111",
                background: "none",
              }}
              onClick={() => alert("Home")}>
              <FontAwesomeIcon icon={faBars} />
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              fontSize: "21px",
              color: "white",
              fontWeight: "bold",
              flex: "1",
            }}>
            Job Roles
          </div>
        </div>
      </TopBar>
    </>
  );
}

export default JobRoles;
