import React from "react";
import logo from "../../assets/Tokens/Logo.png";
import styled from "styled-components";
import ConnectWallet from "../NetworkPopup/ConnectWallet";
import SwitchNetwork from "../NetworkPopup/SwitchNetwork";

const Wrapper = styled.div`
  width: 100%;
  background-color: rgba(46, 46, 46, 0.07);
`;

const HeaderWrapper = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px;
  @media only screen and (max-width: 600px) {
    padding: 0px 10px;
  }
`;
const Logo = styled.img`
  height: 45px;
`;
const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

function Header() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Logo src={logo} alt="logo" />
        <HeaderItems>
          <ConnectWallet />
          <SwitchNetwork />
        </HeaderItems>
      </HeaderWrapper>
    </Wrapper>
  );
}

export default Header;
