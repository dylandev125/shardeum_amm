import React from "react";
import styled from "styled-components";
import tokenImg from "../../assets/images/tokenImg.png";
import Trend from "../SelfHosting/Trend";

const TokenCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 40px;
`;
const TokenImage = styled.img`
  width: 83px;
`;
const TokenInfo = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;
const TokenTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #212121;
  @media (max-width: 900px) {
    font-size: 16px;
  }
`;
const TokenValue = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #757575;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  @media (max-width: 900px) {
    font-size: 18px;
    flex-direction: column;
  }
`;
const TokenValueP = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #616161;
  text-transform: uppercase;
  @media (max-width: 900px) {
    font-size: 18px;
    width: 100%;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 14px;
`;
function Token() {
  return (
    <TokenCont>
      <TokenImage src={tokenImg} alt="tether" />
      <TokenInfo>
        <TokenTitle>Tether (USDT) </TokenTitle>
        <TokenValue>
          <TokenValueP>$ 1.1 USD</TokenValueP>
          <Wrapper>
            <Trend up={false} trend={1.8} />
            Past 24hrs
          </Wrapper>
        </TokenValue>
      </TokenInfo>
    </TokenCont>
  );
}

export default Token;
