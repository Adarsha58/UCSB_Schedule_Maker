import React from "react";
import PageWrapper from "./components/PageWrapper";

//pages
import Login from "./components/pages/Login";
import UserInstruciton2 from "./components/pages/UserInstructions/UserInstruction2";
import UserInstruciton3 from "./components/pages/UserInstructions/UserInstruction3";

function App() {
  return (
    <PageWrapper>
      <UserInstruciton2 />
      <UserInstruciton3 />
    </PageWrapper>
  );
}

export default App;
