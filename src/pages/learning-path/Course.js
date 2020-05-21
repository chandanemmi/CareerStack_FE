import React from "react";
import Container from "../../utilis/container";

function Course() {
  function Handler() {
    alert("Hello");
  }
  return (
    <Container>
      <div className="Course">
        <div className="JobCardBut"> </div>
        <div className="JobCardBut">
          <button
            className="but"
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
          <div class="CourseBut">
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
          <div class="CourseBut">
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
          <div class="CourseBut">
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
          <div class="CourseBut">
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
          <div class="CourseBut">
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
          <div class="CourseBut">
            <button onClick={() => alert("hii")}>Free</button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Course;
