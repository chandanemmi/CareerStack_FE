import React from "react";
import Container from "../utilis/container";

function EachJobRole() {
  return (
    <Container>
      <div
        className="JobRoleBox"
        style={{
          boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.3) ",
          height: "85%",
          gridTemplateRows: "100px auto",
          overflow: "hidden",
        }}>
        <div
          className="JobCard"
          style={{
            height: "110px",
          }}>
          <div className="topic">Python Engineering</div>
        </div>
        {/*cards */}
        <div
          className="JobCard"
          style={{
            display: "grid",
            gridGap: "10px",
            overflow: "hidden",
            height: "auto",
            overflow: "auto",
          }}>
          <div
            className="JobCard"
            style={{
              background: "#ffff",
              height: "auto",
              textAlign: "start",
              border: "1px solid rgba(120, 120, 120, 0.25)",
              padding: "5px",
            }}>
            <div
              className="des"
              style={{ textAlign: "start", fontWeight: "bold" }}>
              Description:
            </div>
            HTML Reference CSS Reference JavaScript Reference SQL Reference
            Python Reference W3.CSS Reference Bootstrap Reference
          </div>
          <div
            className="JobCard"
            style={{
              background: "#ffff",
              height: "auto",
              textAlign: "start",
              border: "1px solid rgba(120, 120, 120, 0.25)",
              padding: "5px",
            }}>
            <div style={{ fontWeight: "bold" }}>
              Sample of reported job titles
            </div>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book.
          </div>
          <div
            className="JobCard"
            style={{
              background: "#ffff",
              height: "auto",
              textAlign: "start",
              border: "1px solid rgba(120, 120, 120, 0.25)",
              padding: "5px",
            }}>
            <div className="skill" style={{ fontWeight: "bold" }}>
              Skills:
            </div>
            Active listening Communication Computer skills Customer service
            Interpersonal skills Leadership Management skills Problem-solving
            Time management
          </div>
        </div>
      </div>
    </Container>
  );
}
export default EachJobRole;
