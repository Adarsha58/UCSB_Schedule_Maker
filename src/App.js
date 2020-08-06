import React from 'react';
import PageWrapper from "./components/PageWrapper";
import Login from "./components/pages/Login";

function App() {
  return (
    <div className="App">
        <PageWrapper>
          <Login/>
        </PageWrapper>
        
    </div>
  );
}

export default App;
