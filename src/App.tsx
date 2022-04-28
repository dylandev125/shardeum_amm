import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import TabPanel from "./components/TabPanel";

const AppWrapper = styled.div`
  margin: 0;
  @media (max-width: 900px) {
    width: 100%;
    overflow-x: hidden;
  }
`;

const GlobalStyles = createGlobalStyle`
*{

  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
}

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

`;

function App() {
  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <Header />
        <TabPanel />
      </AppWrapper>
    </>
  );
}

export default App;
