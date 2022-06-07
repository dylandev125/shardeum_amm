import React, { useState } from "react";
import styled from "styled-components";
import Selector from "./Selector";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import AmountInput from "./Input";
import SelectTokenModal from "../SelectTokenModal";
import Dialog from "../Dialog";
import SettingsModal from "./SettingsModal";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
import ETH from "../../assets/Tokens/ETH.png";
import THT from "../../assets/Tokens/THT.png";

const Wrapper = styled.div`
  width: 90%;
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
  background: #000000;
  width: 50px;
  height: 50px;
  box-shadow: 4px 3px 14px 2px rgba(0, 0, 0, 0.18);
  border-radius: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
`;
const ConnectWalletBtn = styled.button`
  background: #000000;
  box-shadow: 4px 3px 14px 2px rgba(0, 0, 0, 0.18);
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
const SwapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
`;
const SwapBtnDiv = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SwapArrow = styled.div`
  width: 30px;
  height: 30px;
  background: rgb(247, 248, 250);
  border: 4px solid rgb(255, 255, 255);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const TokenButton = styled(Button)`
  &.MuiButton-root {
    width: 115px;
    height: 38px;
    background: rgb(237, 238, 242);
    box-shadow: rgb(0 0 0 / 8%) 0px 6px 10px;
    color: rgb(0, 0, 0);
    border-radius: 15px;
    border: none;
    font-size: 18px;
    font-weight: 500;
    font-family: Inter;
    font-style: normal;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: none;
    :hover {
      background: #ced0d9 !important;
    }
  }
`;
const MaxButton2 = styled.button`
  width: 35px;
  height: 22px;
  background: #ced0d9;
  color: #000000;
  border-radius: 10px;
  border: none;
  font-size: 13px;
  font-weight: 500;
  font-family: Inter;
  font-style: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
`;
const BalanceDiv = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 15px;
  font-weight: 500;
  font-family: Inter;
  font-style: normal;
  color: #6e727d;
  gap: 5px;
`;
const SwapCard = styled.div`
  height: 100px;
  background: #f7f8fa;
  border-radius: 20px;
  cursor: pointer;
`;
const InputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 15px;
`;
const InputValue = styled.input`
  border: none;
  font-size: 28px;
  color: rgb(0, 0, 0);
  background: transparent;
  outline: none;
  font-family: "Inter custom", sans-serif;
  position: relative;
`;
const Buttons = styled.div``;

function Swap2() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [approved, setApproved] = useState(false);
  const [swap, setSwap] = useState(true);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const OnChageField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue1(e.target.value);
    console.log(value1);
  };
  const OnChageField2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue2(e.target.value);
  };

  return (
    <Wrapper>
      <Header>
        <Title>Swap</Title>
        <SettingsModal />
      </Header>
      <Body>
        <SwapWrapper>
          <SwapBtnDiv>
            <SwapArrow onClick={() => setSwap(!swap)}>
              <ArrowDownwardIcon style={{ width: "18px", height: "18px" }} />
            </SwapArrow>
          </SwapBtnDiv>
          {swap ? (
            <>
              <SwapCard>
                <InputDiv>
                  <InputValue
                    type="number"
                    inputMode="decimal"
                    placeholder="0.0"
                    min="1"
                    name="value1"
                    value={value1}
                    onChange={OnChageField}
                  />
                  <SelectTokenModal />
                  {/* <TokenButton>
                    <img
                      src={ETH}
                      alt="ETH"
                      style={{
                        width: "24px",
                        height: "24px",
                        marginRight: "5px",
                      }}
                    />
                    ETH
                    <KeyboardArrowDownIcon
                      style={{ width: "23px", height: "23px" }}
                    />
                  </TokenButton> */}
                </InputDiv>
                <BalanceDiv>
                  Balance: 1.289
                  <MaxButton2>Max</MaxButton2>
                </BalanceDiv>
              </SwapCard>
              <SwapCard>
                <InputDiv>
                  <InputValue
                    type="number"
                    inputMode="decimal"
                    placeholder="0.0"
                    min="1"
                    name="value2"
                    value={value2}
                    onChange={OnChageField2}
                  />
                  <SelectTokenModal />
                  {/* <TokenButton>
                    <img
                      src={THT}
                      alt="THT"
                      style={{
                        width: "24px",
                        height: "24px",
                        marginRight: "5px",
                      }}
                    />
                    THT
                    <KeyboardArrowDownIcon
                      style={{ width: "23px", height: "23px" }}
                    />
                  </TokenButton> */}
                </InputDiv>
                <BalanceDiv>Balance: 1.289</BalanceDiv>
              </SwapCard>
            </>
          ) : (
            <>
              <SwapCard>
                <InputDiv>
                  <InputValue
                    type="number"
                    inputMode="decimal"
                    placeholder="0.0"
                    min="1"
                    name="value2"
                    value={value2}
                    onChange={OnChageField2}
                  />
                  <SelectTokenModal />
                  {/* <TokenButton>
                    <img
                      src={THT}
                      alt="THT"
                      style={{
                        width: "24px",
                        height: "24px",
                        marginRight: "5px",
                      }}
                    />
                    THT
                    <KeyboardArrowDownIcon
                      style={{ width: "23px", height: "23px" }}
                    />
                  </TokenButton> */}
                </InputDiv>
                <BalanceDiv>Balance: 1.289</BalanceDiv>
              </SwapCard>
              <SwapCard>
                <InputDiv>
                  <InputValue
                    type="number"
                    inputMode="decimal"
                    placeholder="0.0"
                    min="1"
                    name="value1"
                    value={value1}
                    onChange={OnChageField}
                  />
                  <SelectTokenModal />
                  {/* <TokenButton>
                    <img
                      src={ETH}
                      alt="ETH"
                      style={{
                        width: "24px",
                        height: "24px",
                        marginRight: "5px",
                      }}
                    />
                    ETH
                    <KeyboardArrowDownIcon
                      style={{ width: "23px", height: "23px" }}
                    />
                  </TokenButton> */}
                </InputDiv>
                <BalanceDiv>
                  Balance: 1.289
                  <MaxButton2>Max</MaxButton2>
                </BalanceDiv>
              </SwapCard>
            </>
          )}
        </SwapWrapper>
        {/* <Pay>
          <SelectTokenModal children={<Selector label="You Pay" />} />
          <AmountInput />
        </Pay>
        <StyledIconButton>
          <SwapVertIcon sx={{ color: "#fff", width: "30px", height: "30px" }} />
        </StyledIconButton>
        <Receive>
          <SelectTokenModal children={<Selector label="You Receive" />} />
          <AmountInput />
        </Receive>*/}
        {isWalletConnected ? (
          <Buttons>
            <Dialog
              transaction="submitted"
              setApproved={setApproved}
              approved={approved}
            />
          </Buttons>
        ) : (
          <ConnectWalletBtn onClick={() => setIsWalletConnected(true)}>
            Connect Wallet
          </ConnectWalletBtn>
        )}
      </Body>
    </Wrapper>
  );
}

export default Swap2;
