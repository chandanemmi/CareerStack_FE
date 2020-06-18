import React from "react";
import Container from "../../../utilis/container";
import Box from "../../../utilis/Box";
import SmallBox from "../../../utilis/BigCard";
import Card from "../../../utilis/Card2";
import logo from "../../../logo.svg";
function SingleJobPosting() {
  return (
    <Container>
      <Box>
        <Card>
          <div style={{ overflow: "hidden" }}>
            <div className="JobPostCard">
              <div className="imgbx">
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
          </div>
        </Card>
        <SmallBox>
          <Card>
            <div
              className="des"
              style={{ textAlign: "start", fontWeight: "bold" }}>
              Description:
            </div>
            HTML Reference CSS Reference JavaScript Reference SQL Reference
            Python Reference W3.CSS Reference Bootstrap Reference
          </Card>
          <Card>
            <div style={{ fontWeight: "bold" }}>
              Sample of reported job titles
            </div>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book.
          </Card>
          <Card>
            <div className="skill" style={{ fontWeight: "bold" }}>
              Skills:
            </div>
            Active listening Communication Computer skills Customer service
            Interpersonal skills Leadership Management skills Problem-solving
            Time management
          </Card>
          {/* Similar job posting */}
          <p
            style={{
              textAlign: "start",
              fontSize: "22px",
              color: " #000000",
              lineHeight: "15px",
              opacity: 0.6,
            }}>
            Similar Job Posting
          </p>
          <Card>
            {" "}
            <div className="JobPostCard">
              <div className="imgbx">
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
          </Card>
          {/*  */}
          <Card>
            <div className="JobPostCard">
              <div className="imgbx">
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
          </Card>
          {/*  */}
          <Card>
            <div className="JobPostCard">
              <div className="imgbx">
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
          </Card>
        </SmallBox>
      </Box>
    </Container>
  );
}

export default SingleJobPosting;
