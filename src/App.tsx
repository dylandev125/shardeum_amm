import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import TabPanel from "./components/TabPanel/index";

const AppWrapper = styled.div`
  width: 100%;
`;
const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
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
