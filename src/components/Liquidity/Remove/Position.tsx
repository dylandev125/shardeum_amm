import React from "react";
import styled from "styled-components";
import THT from "../../../assets/Tokens/THT.png";
import ETH from "../../../assets/Tokens/ETH.png";

const PositionDiv = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
const PoolWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
const PoolDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;
`;
const PoolText = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
`;
const TokenText = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
`;
const PoolIconDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const PoolIcon = styled.img`
  width: 25px;
  height: 25px;
`;
const Position = () => {
  return (
    <div>
      <PositionDiv>
        <PoolText>Your Position</PoolText>
        <PoolText>0.665651548451544</PoolText>
      </PositionDiv>
      <PoolWrapper>
        <PoolDiv>
          <PoolText>0.01545154%</PoolText>
          <TokenText>Your Pool Share</TokenText>
        </PoolDiv>
        <PoolDiv>
          <PoolText>5.35545451848</PoolText>
          <PoolIconDiv>
            <PoolIcon src={THT} alt="THT" />
            <TokenText>USDT</TokenText>
          </PoolIconDiv>
        </PoolDiv>
        <PoolDiv>
          <PoolText>5.35545451848</PoolText>
          <PoolIconDiv>
            <PoolIcon src={ETH} alt="ETH" />
            <TokenText>ETH</TokenText>
          </PoolIconDiv>
        </PoolDiv>
      </PoolWrapper>
    </div>
  );
};

export default Position;
