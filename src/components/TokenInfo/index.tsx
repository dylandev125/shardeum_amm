import React from "react";
import styled from "styled-components";
import tokenImg from "../../assets/images/tokenImg.png";
import Trend from "./Trend";

const TokenCont = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 2rem;
`;
const TokenImage = styled.img`
  width: 80px;
  height: 80px;
  @media only screen and (max-width: 600px) {
    width: 50px;
    height: 50px;
  }
`;
const TokenInfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
  @media only screen and (max-width: 600px) {
    gap: 0.5rem;
  }
`;
const TokenTitle = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  @media only screen and (max-width: 600px) {
    font-size: 18px;
    line-height: 20px;
  }
`;
const TokenValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: start;
  }
`;
const TokenValuePrice = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #616161;
  @media only screen and (max-width: 600px) {
    font-size: 18px;
    line-height: 20px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #616161;
`;

function TokenInfo() {
  return (
    <TokenCont>
      <TokenImage src={tokenImg} alt="tether" />
      <TokenInfoDiv>
        <TokenTitle>Tether (USDT)</TokenTitle>
        <TokenValue>
          <TokenValuePrice>$ 1.1 USD</TokenValuePrice>
          <Wrapper>
            <Trend up={false} trend={1.8} />
            Past 24hrs
          </Wrapper>
        </TokenValue>
      </TokenInfoDiv>
    </TokenCont>
  );
}

export default TokenInfo;
