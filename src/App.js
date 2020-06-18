import React from "react";
import Routes from "./Router/index";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import "./scsss/style.scss";

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});

const App = (props) => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
export default App;

// function App() {
//   return (
//     <div className="App">
//       {/* <JobRoles /> */}
//       {/* <SingleJobRole /> */}
//       {/* <JobPosting /> */}
//       {/* <SingleJobPosting /> */}
//       {/* <Course /> */}
//       {/* <SingleCourse /> */}
//       {/* <Demo /> */}
//       <Routes />
//       {/* <Job /> */}
//       {/* <Create /> */}

//       {/* <EachJob /> */}

//       {/* <IndividualCourse /> */}
//     </div>
//   );
// }

//expore
// import JobRoles from "./pages/Explore/JobRole/JobRoles";
// import SingleJobRole from "./pages/Explore/JobRole/SingleJobRole";
// import JobPosting from "./pages/Explore/JobPosting/JobPostings.js";
// import SingleJobPosting from "./pages/Explore/JobPosting/SingleJobPosting";
// import Course from "./pages/Explore/Course/Courses.js";
// import SingleCourse from "./pages/Explore/Course/SingleCourse";
