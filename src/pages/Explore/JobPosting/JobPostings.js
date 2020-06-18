import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faArrowLeft,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import TopBar from "../../../utilis/TopBar";
import Container from "../../../utilis/container";
import logo from "../../../logo.svg";

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
function JobPosting() {
  const [toggle, setToggle] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <Container>
        <div className="JobRoleBox" style={{ padding: "0" }}>
          <div className="JobPostCard">
            <div className="imgbx">
              {/* <figure>
              
                <FontAwesomeIcon icon={faBars} />
                <FontAwesomeIcon icon={faGoogle} />
              </figure> */}
              <img src={logo} alt="logo" />
            </div>
            <div className="JPost-content">
              <h4>Front End Development</h4>
              <div className="p1">Google Inc.</div>
              <div className="p2">Bangalore</div>
              <div className="p3">Be an early applicant</div>
              <div className="p4">
                <span style={{ color: "green" }}>New</span>{" "}
                <span style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                  Salary:10-20k
                </span>{" "}
                <span style={{ paddingLeft: "5px" }}>rep3 year</span>
              </div>
            </div>
          </div>
          <div className="JobPostCard">
            <div className="imgbx">
              {/* <figure>
              
                <FontAwesomeIcon icon={faBars} />
                <FontAwesomeIcon icon={faGoogle} />
              </figure> */}
              <img src={logo} alt="logo" />
            </div>
            <div className="JPost-content">
              <h4>Front End Development</h4>
              <div className="p1">Google Inc.</div>
              <div className="p2">Bangalore</div>
              <div className="p3">Be an early applicant</div>
              <div className="p4">
                <span style={{ color: "green" }}>New</span>{" "}
                <span style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                  Salary:10-20k
                </span>{" "}
                <span style={{ paddingLeft: "5px" }}>rep3 year</span>
              </div>
            </div>
          </div>
          <div className="JobPostCard">
            <div className="imgbx">
              {/* <figure>
              
                <FontAwesomeIcon icon={faBars} />
                <FontAwesomeIcon icon={faGoogle} />
              </figure> */}
              <img src={logo} alt="logo" />
            </div>
            <div className="JPost-content">
              <h4>Front End Development</h4>
              <div className="p1">Google Inc.</div>
              <div className="p2">Bangalore</div>
              <div className="p3">Be an early applicant</div>
              <div className="p4">
                <span style={{ color: "green" }}>New</span>{" "}
                <span style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                  Salary:10-20k
                </span>{" "}
                <span style={{ paddingLeft: "5px" }}>rep3 year</span>
              </div>
            </div>
          </div>
          <div className="JobPostCard">
            <div className="imgbx">
              {/* <figure>
              
                <FontAwesomeIcon icon={faBars} />
                <FontAwesomeIcon icon={faGoogle} />
              </figure> */}
              <img src={logo} alt="logo" />
            </div>
            <div className="JPost-content">
              <h4>Front End Development</h4>
              <div className="p1">Google Inc.</div>
              <div className="p2">Bangalore</div>
              <div className="p3">Be an early applicant</div>
              <div className="p4">
                <span style={{ color: "green" }}>New</span>{" "}
                <span>Salary:10-20k</span>{" "}
                <span style={{ paddingLeft: "5px" }}>rep3 year</span>
              </div>
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
                // borderRadius: "0.2rem",
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
            Job Posting
          </div>
        </div>
      </TopBar>
    </>
  );
}

export default JobPosting;
