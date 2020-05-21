import React from "react";
// import "./App.css";
import Create from "./pages/learning-path/create";
import Job from "./pages/learning-path/jobRole";
import "./scsss/style.scss";
import EachJob from "./pages/EachJobRole";
import JobPosting from "./pages/learning-path/JobPosting.js";
import Course from "./pages/learning-path/Course";
import EachCourse from "./pages/learning-path/EachCourse";
function App() {
  return (
    <div className="App">
      {/* <Course /> */}
      {/* <Job /> */}
      {/* <Create /> */}

      {/* <EachJob /> */}
      {/* <JobPosting /> */}
      <EachCourse />
    </div>
  );
}

export default App;
