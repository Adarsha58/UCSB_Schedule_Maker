import React from "react";
import PageWrapper from "./components/PageWrapper";

//pages
import Login from "./components/pages/Login";
import UserInstruciton1 from "./components/pages/UserInstructions/UserInstruction1";
import UserInstruciton2 from "./components/pages/UserInstructions/UserInstruction2";
import CourseSearch from "./components/pages/courseSearch";

function App() {
  return (
    <PageWrapper>
      <UserInstruciton2 />
    </PageWrapper>
  );
}

export default App;
