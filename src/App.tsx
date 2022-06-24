import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import TabPanel from "./components/TabPanel/index";
import { Web3ReactProvider } from '@web3-react/core';
import {
  ExternalProvider,
  JsonRpcFetchFunc,
  Web3Provider,
} from '@ethersproject/providers';

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

  const getLibrary = (provider: ExternalProvider | JsonRpcFetchFunc) => {
    return new Web3Provider(provider);
  };

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <GlobalStyles />
      <AppWrapper>
        <Header />
        <TabPanel />
      </AppWrapper>
    </Web3ReactProvider>
  );
}

export default App;
