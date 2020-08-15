import React from "react";
import PageWrapper from "./components/PageWrapper";

//pages
import Login from "./components/pages/Login";
import UserInstruciton1 from "./components/pages/UserInstruction1";
import CourseSearch from "./components/pages/courseSearch";

function App() {
  return (
    <PageWrapper>
      <UserInstruciton1/>
    </PageWrapper>
  );
}

export default App;
