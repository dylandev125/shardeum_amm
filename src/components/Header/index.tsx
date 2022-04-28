import React from "react";
import logo from "../../assets/images/logo.png";
import styled from "styled-components";
import ConnectWallet from "../NetworkPopup/ConnectWallet";
import SwitchNetwork from "../NetworkPopup/SwitchNetwork";
const HeaderWrapper = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f4ff;
  padding: 0px 80px;
  @media (max-width: 900px) {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    padding: 25px 0px;
    height: 100%;
    gap: 10px;
  }
`;
const Logo = styled.img`
  height: 45px;
  object-fit: contain;
`;

const HeaderItems = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="logo" />
      <HeaderItems>
        <SwitchNetwork />

        <ConnectWallet />
      </HeaderItems>
    </HeaderWrapper>
  );
}

export default Header;
