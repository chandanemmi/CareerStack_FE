import React, { useState } from "react";
import Container from "../../../utilis/container";
import Box from "../../../utilis/Box";
import SmallBox from "../../../utilis/BigCard";
import Card from "../../../utilis/Card2";
import Slider from "../../../utilis/Slider";

const SingleJobRole = () => {
  return (
    <Container>
      <Slider>
        <Box>
          <Card color="blue">
            <div className="topic">Python Engineering</div>
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
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
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
            <Card>
              <div style={{ fontWeight: "bold", display: "grid" }}>
                Similar Job-Roles:
                <div className="SimilarJobRole">
                  <div className="SimilarJobRole1 card">Software Developer</div>
                  <div className="SimilarJobRole1 card">Java</div>
                  <div
                    className="SimilarJobRole1 card
                ">
                    Application Developer
                  </div>
                </div>
              </div>
            </Card>
          </SmallBox>
        </Box>
      </Slider>
    </Container>
  );
};

export default SingleJobRole;
