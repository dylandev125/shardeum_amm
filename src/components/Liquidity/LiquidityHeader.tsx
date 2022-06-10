import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;
const HeaderWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
`;
const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  color: #000000;
`;
const Divider = styled.div`
  border-right: 2px solid #616161;
  height: 50px;
`;
const TitleText = styled.div`
  width: 300px;
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  font-family: "Inter";
  font-style: normal;
`;
const HeaderButtons = styled.div`
  width: 50%;
  display: flex;
  justify-content: end;
  gap: 25px;
`;
const PairBtn = styled.button`
  width: 200px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 10px;
  color: #000000;
  font-size: 14px;
  line-height: 21px;
  font-weight: 600;
  font-style: normal;
  font-family: "Inter";
  cursor: pointer;
`;

const AddBtn = styled.button`
  width: 200px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000000;
  box-shadow: 0px 7px 18px -2px rgba(0, 0, 0, 0.18);
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-size: 14px;
  line-height: 21px;
  font-weight: 600;
  font-style: normal;
  font-family: "Inter";
  cursor: pointer;
`;

const LiquidityHeader = () => {
  return (
    <>
      <Wrapper>
        <HeaderWrapper>
          <Title>Liquidity</Title>
          <Divider />
          <TitleText>
            Trade tokens in an instant with UniFarm for verified tokens and low
            fee
          </TitleText>
        </HeaderWrapper>
        <HeaderButtons>
          <PairBtn>Create Pair</PairBtn>
          <AddBtn>Add Liquidity</AddBtn>
        </HeaderButtons>
      </Wrapper>
    </>
  );
};

export default LiquidityHeader;
