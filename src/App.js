import React from "react";
import PageWrapper from "./components/PageWrapper";

//pages
import Login from "./components/pages/Login";
import CourseSearch from "./components/pages/courseSearch";

function App() {
  return (
    <PageWrapper>
      <Login />
    </PageWrapper>
  );
}

export default App;
