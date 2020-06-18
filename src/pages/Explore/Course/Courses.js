import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faArrowLeft,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import TopBar from "../../../utilis/TopBar";
import Container from "../../../utilis/container";

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

function Course() {
  const [toggle, setToggle] = useState(0);

  function Handler() {
    alert("Hello");
  }
  return (
    <>
      <Container>
        <div className="Course">
          <div className="JobCardButton"> </div>
          <div className="JobCardButton">
            <button
              className="button"
              onClick={() => {
                Handler();
              }}
              style={{}}>
              ALL
            </button>
          </div>

          <div className="CourseCard">
            <div className="CourseTitle">
              <i class="fa fa-hexagon"></i>
              <ul>
                <li>Jupiter</li> <li className="SecondTitle">NoteBook</li>
              </ul>
            </div>
            <div className="platfrom">
              <ul>
                <li>Platfrom Coursera</li>
                <li>Duration 6 months</li>
              </ul>
            </div>
            <div class="CourseButton">
              <button onClick={() => alert("hii")}>Free</button>
            </div>
          </div>
          <div className="CourseCard">
            {" "}
            <div className="CourseTitle">
              <i class="fa fa-hexagon"></i>
              <ul>
                <li>Jupiter</li> <li className="SecondTitle">NoteBook</li>
              </ul>
            </div>
            <div className="platfrom">
              <ul>
                <li>Platfrom Coursera</li>
                <li>Duration 6 months</li>
              </ul>
            </div>
            <div class="CourseButton">
              <button onClick={() => alert("hii")}>Free</button>
            </div>
          </div>
          <div className="CourseCard">
            {" "}
            <div className="CourseTitle">
              <i class="fa fa-hexagon"></i>
              <ul>
                <li>Jupiter</li> <li className="SecondTitle">NoteBook</li>
              </ul>
            </div>
            <div className="platfrom">
              <ul>
                <li>Platfrom Coursera</li>
                <li>Duration 6 months</li>
              </ul>
            </div>
            <div class="CourseButton">
              <button onClick={() => alert("hii")}>Free</button>
            </div>
          </div>
          <div className="CourseCard">
            {" "}
            <div className="CourseTitle">
              <i class="fa fa-hexagon"></i>
              <ul>
                <li>Jupiter</li> <li className="SecondTitle">NoteBook</li>
              </ul>
            </div>
            <div className="platfrom">
              <ul>
                <li>Platfrom Coursera</li>
                <li>Duration 6 months</li>
              </ul>
            </div>
            <div class="CourseButton">
              <button onClick={() => alert("hii")}>Free</button>
            </div>
          </div>
          <div className="CourseCard">
            {" "}
            <div className="CourseTitle">
              <i class="fa fa-hexagon"></i>
              <ul>
                <li>Jupiter</li> <li className="SecondTitle">NoteBook</li>
              </ul>
            </div>
            <div className="platfrom">
              <ul>
                <li>Platfrom Coursera</li>
                <li>Duration 6 months</li>
              </ul>
            </div>
            <div class="CourseButton">
              <button onClick={() => alert("hii")}>Free</button>
            </div>
          </div>
          <div className="CourseCard">
            {" "}
            <div className="CourseTitle">
              <i class="fa fa-hexagon"></i>
              <ul>
                <li>Jupiter</li> <li className="SecondTitle">NoteBook</li>
              </ul>
            </div>
            <div className="platfrom">
              <ul>
                <li>Platfrom Coursera</li>
                <li>Duration 6 months</li>
              </ul>
            </div>
            <div class="CourseButton">
              <button onClick={() => alert("hii")}>Free</button>
            </div>
          </div>
        </div>
      </Container>
      <TopBar>
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
            }}>
            {toggle && (
              <div>
                <input type="text" placeholder="Search" className="Search" />
              </div>
            )}
            <Button
              ButtonStyle={{
                color: "#80B4FF",
                lineHeight: "30px",
                width: "30px",
                background: "#ffff",
                borderRadius: "50px",
                marginRight: "0.5rem",
              }}
              onClick={() => {
                setToggle(!toggle);
              }}>
              <FontAwesomeIcon icon={faSearch} style={{ style: "none" }} />
            </Button>
            <Button
              ButtonStyle={{
                color: "#11111",
                background: "none",
              }}
              onClick={() => alert("Menu")}>
              <FontAwesomeIcon icon={faBars} />
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              fontSize: "21px",
              lineheight: "26px",
              color: "#FFFFFF",
              fontWeight: "bold",
            }}>
            Courses
          </div>
        </div>
      </TopBar>
    </>
  );
}

export default Course;
