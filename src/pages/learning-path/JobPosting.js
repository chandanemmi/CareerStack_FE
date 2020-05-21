import React, { useState } from "react";
import Container from "../../utilis/container";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import logo from "../../logo.svg";
import {
  faGoogle,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
library.add(faGoogle, faFacebook, faTwitter);
function JobPosting() {
  const [navOpen, setNavOpen] = useState(false);
  return (
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
  );
}

export default JobPosting;
