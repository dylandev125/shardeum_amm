import React from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import Selector from "./Selector";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import AmountInput from "./Input";
import SelectTokenModal from "../SelectTokenModal";
import Dialog from "../Dialog";
const Wrapper = styled.div`
  width: 100%;
  border: 1px solid #e0e0e0;
  box-shadow: 1px 14px 54px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
`;
const Header = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  border-bottom: 1px solid #e0e0e0;
`;
const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #212121;
`;
const Body = styled.div`
  padding: 30px 30px;
`;
const Pay = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Receive = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0px;
`;
const StyledIconButton = styled.div`
  background: #a80084;
  width: 50px;
  height: 50px;
  box-shadow: 4px 3px 14px 2px rgba(168, 0, 132, 0.19);
  border-radius: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
`;
const ConnectWalletBtn = styled.button`
  background: #a80084;
  box-shadow: 4px 3px 14px 2px rgba(168, 0, 132, 0.19);
  border-radius: 10px;
  width: 100%;
  border: none;
  height: 55px;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 26px;
  text-align: center;
  text-transform: capitalize;
  margin-top: 20px;
`;
function Swap() {
  return (
    <Wrapper>
      <Header>
        <Title>Swap</Title>
        <IconButton>
          <SettingsIcon sx={{ color: "#212121" }} />
        </IconButton>
      </Header>
      <Body>
        <Pay>
          <SelectTokenModal children={<Selector label="You Pay" />} />
          <Dialog />
          <AmountInput />
        </Pay>
        <StyledIconButton>
          <SwapVertIcon sx={{ color: "#fff", width: "30px", height: "30px" }} />
        </StyledIconButton>
        <Receive>
          <SelectTokenModal children={<Selector label="You Receive" />} />
          <AmountInput />
        </Receive>
        <ConnectWalletBtn>Connect Wallet</ConnectWalletBtn>
      </Body>
    </Wrapper>
  );
}

export default Swap;
