import React from "react";
import Routes from "./Router/index";
import "./App.css";
//import Demo from "./pages/Explore/Demo";
import CreateLearningPath from "./pages/Learning-Path/CreateLearningPath";
//expore
import JobRoles from "./pages/Explore/JobRole/JobRoles";
import SingleJobRole from "./pages/Explore/JobRole/SingleJobRole";
import JobPosting from "./pages/Explore/JobPosting/JobPostings.js";
import SingleJobPosting from "./pages/Explore/JobPosting/SingleJobPosting";
import Course from "./pages/Explore/Course/Courses.js";
import SingleCourse from "./pages/Explore/Course/SingleCourse";
import Home from "./pages/Home/home"

import "./scsss/style.scss";

function App() {
  return (
    <div className="App">
      <Home/>
      <JobRoles />
      <SingleJobRole />
      <JobPosting /> 
      <SingleJobPosting />
      <Course />
      <SingleCourse />
    
      <Routes />
      {/* <Job />
      <Create />

      <EachJob />

       <IndividualCourse /> */}
    </div>
  );
}

export default App;
