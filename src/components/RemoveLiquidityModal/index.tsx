import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Slider from "@mui/material/Slider";
import THT from "../../assets/Tokens/THT.png";
import ETH from "../../assets/Tokens/ETH.png";
import GasStation from "./GasStation";
import Position from "./Position";

const CardDiv = styled.div`
  width: 520px;
  height: 600px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  box-shadow: 1px 14px 54px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  margin: 0px auto;
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;
const CardTitle = styled.div`
  height: 90px;
  display: flex;
  padding-left: 25px;
  padding-right: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: start;
  }
`;
const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const TitleText = styled.span`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  font-family: "Inter";
  font-style: normal;
`;

const SliderContentDiv = styled.div`
  margin-bottom: 10px;
`;
const SliderContentButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SliderContentButton = styled.button`
  width: 65px;
  height: 34px;
  border-radius: 5px;
  border: 1px solid #cfcfcf;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
`;
const TokenText = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  margin-left: 20px;
`;
const TokenValue = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;
const RecieveLink = styled.div`
  margin-top: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-decoration-line: underline;
  color: #a80084;
  cursor: pointer;
`;
const PriceValue = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
`;

const ApproveButton = styled.button`
  width: 50%;
  height: 55px;
  background: #a80084;
  box-shadow: 4px 3px 14px 2px rgba(168, 0, 132, 0.19);
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 26px;
  color: #ffffff;
  text-align: center;
  border: none;
  cursor: pointer;
`;

const RemoveButton = styled.button`
  width: 50%;
  height: 55px;
  background: #e0e0e0;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 26px;
  color: #a9a9a9;
  text-align: center;
  border: none;
`;
const PoolText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
`;

const PriceDiv = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
  alig-items: center;
  gap: 15px;
`;

const RemoveLiquidityModal = () => {
  const [sliderValue, setSliderValue] = useState<number>(25);
  const handleSliderChange = (newValue: number) => {
    setSliderValue(newValue);
  };
  const handleSliderButtonClick = (value: number) => {
    setSliderValue(value);
  };
  return (
    <div>
      <div style={{ marginTop: "50px" }}>
        <CardDiv>
          <CardTitle>
            <TitleDiv>
              <ArrowBackIcon style={{ width: "25px", height: "25px" }} />
              <TitleText>Remove Liquidity</TitleText>
            </TitleDiv>
            <GasStation />
          </CardTitle>
          <div style={{ border: "1px solid #E0E0E0" }}></div>
          <div
            style={{
              padding: "30px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <div>Amount</div>
                <div>75%</div>
              </div>
              <div>
                <SliderContentDiv>
                  <Slider
                    size="small"
                    value={sliderValue}
                    aria-label="Small"
                    valueLabelDisplay="off"
                    style={{ color: "#A80084" }}
                    onChange={() => handleSliderChange}
                  />
                </SliderContentDiv>
                <SliderContentButtons>
                  <SliderContentButton
                    onClick={() => handleSliderButtonClick(25)}
                    style={
                      sliderValue === 25
                        ? { color: "#fff", backgroundColor: "#A80084" }
                        : { color: "#CFCFCF" }
                    }
                  >
                    25%
                  </SliderContentButton>
                  <SliderContentButton
                    onClick={() => handleSliderButtonClick(50)}
                    style={
                      sliderValue === 50
                        ? { color: "#fff", backgroundColor: "#A80084" }
                        : { color: "#CFCFCF" }
                    }
                  >
                    50%
                  </SliderContentButton>
                  <SliderContentButton
                    onClick={() => handleSliderButtonClick(75)}
                    style={
                      sliderValue === 75
                        ? { color: "#fff", backgroundColor: "#A80084" }
                        : { color: "#CFCFCF" }
                    }
                  >
                    75%
                  </SliderContentButton>
                  <SliderContentButton
                    onClick={() => handleSliderButtonClick(100)}
                    style={
                      sliderValue === 100
                        ? { color: "#fff", backgroundColor: "#A80084" }
                        : { color: "#CFCFCF" }
                    }
                  >
                    MAX
                  </SliderContentButton>
                </SliderContentButtons>
              </div>
            </div>
            <div
              style={{
                marginTop: "25px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={THT} />
                <TokenText>USDT</TokenText>
              </div>
              <TokenValue>10.00</TokenValue>
            </div>
            <hr style={{ border: "1px solid #E0E0E0", marginTop: "20px" }} />
            <div
              style={{
                marginTop: "25px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={ETH} />
                <TokenText>ETH</TokenText>
              </div>
              <TokenValue>0.002355</TokenValue>
            </div>
            <RecieveLink>Recieve ETH</RecieveLink>
            <PriceDiv>
              <PriceValue>Price : 1 ETH = 4221 USDT</PriceValue>
              <PriceValue>1 USDT = 0.334 ETH</PriceValue>
            </PriceDiv>
            <PriceDiv>
              <ApproveButton>Approve</ApproveButton>
              <RemoveButton disabled>Remove</RemoveButton>
            </PriceDiv>
          </div>
          <Position />
        </CardDiv>
      </div>
    </div>
  );
};

export default RemoveLiquidityModal;
