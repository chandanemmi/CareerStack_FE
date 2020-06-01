import React, { useState } from "react";
// import "../../App.css";
// import Select from "react-select";

const CreateLearningPath = (props) => {
  //   const [location, setLocation] = useState([]);
  //   const onSelectOptionChange = (location) => {
  //     {
  //       console.log(location);
  //     }
  //     setLocation(location);
  //   };
  return (
    <React.Fragment>
      <div className="container">
        <div className="box">
          <div className="box1">
            Goals
            <div className="box2">
              <i class="fa fa-plus icon"></i>
              <input className="input-field" type="select" placeholder="Name" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateLearningPath;
