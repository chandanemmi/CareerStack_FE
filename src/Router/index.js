import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//pages
import JobRoles from "../pages/Explore/JobRole/JobRoles";
import SingleJobRole from "../pages/Explore/JobRole/SingleJobRole";
import JobPosting from "../pages/Explore/JobPosting/JobPostings.js";
import SingleJobPosting from "../pages/Explore/JobPosting/SingleJobPosting";
import Course from "../pages/Explore/Course/Courses.js";
import SingleCourse from "../pages/Explore/Course/SingleCourse";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {" "}
        <Route path="/Explore/JobRoles" component={JobRoles} exact />
        <Route path="/Explore/SingleJobRole" component={SingleJobRole} exact />
        <Route path="/Explore/JobPosting" component={JobPosting} exact />
        <Route
          path="/Explore/SingleJobPosting"
          component={SingleJobPosting}
          exact
        />
        <Route path="/Explore/Courses" component={Course} exact />
        <Route path="/Explore/SingleCourse" component={SingleCourse} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
