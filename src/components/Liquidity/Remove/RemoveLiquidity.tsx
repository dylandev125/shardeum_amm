import React, { useState } from "react";
import styled from "styled-components";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import ClipLoader from "react-spinners/ClipLoader";
import ETH from "../../../assets/Tokens/ETH.png";
import THT from "../../../assets/Tokens/THT.png";
import Position from "./Position";
import GasStation from "./GasStation";
import RemoveButton from "./RemoveButton";

const Wrapper = styled.div`
  margin-top: 2rem;
`;
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
const PositonDiv = styled.div`
  width: 520px;
  margin: 0px auto;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
const CardTitle = styled.div`
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.5rem;
  padding-right: 1rem;
  border-bottom: 1px solid #e0e0e0;
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
const MainDiv = styled.div`
  padding: 30px;
  @media only screen and (max-width: 600px) {
    padding: 10px;
  }
`;
const AmountDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
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
  color: #000000;
  cursor: pointer;
`;
const PriceValue = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
`;

const PriceDiv = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const RemoveBtn = styled.button`
  width: 50%;
  height: 55px;
  background: #e0e0e0;
  border: none;
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 26px;
  color: #a9a9a9;
  text-align: center;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
const PercentageAmount = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;
const PercentageValue = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;
const TokenDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
`;
const TokenDiv = styled.div`
  display: flex;
  align-items: center;
`;
const TokenIcon = styled.img`
  width: 55px;
  height: 55px;
`;

const useStyles = makeStyles((theme) => ({
  Root: {
    width: "50%",
    height: "55px",
    borderRadius: "10px !important",
    fontFamily: "Inter !important",
    fontStyle: "normal !important",
    fontSize: "15px !important",
    lineHeight: "26px !important",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));

interface Props {
  handleBack: () => void;
}

const RemoveLiquidity = ({ handleBack }: Props) => {
  const classes = useStyles();
  const [sliderValue, setSliderValue] = useState<number>(25);
  const handleSliderChange = (event: Event, newValue: number) => {
    setSliderValue(newValue);
  };
  const handleSliderButtonClick = (value: number) => {
    setSliderValue(value);
  };
  const [Isloading, setLoding] = React.useState(false);
  const [approve, setApprove] = useState(false);

  const handleApprove = () => {
    setLoding(true);
    setTimeout(() => {
      setLoding(false);
      setApprove(true);
    }, 1500);
  };

  return (
    <>
      <Wrapper>
        <CardDiv>
          <CardTitle>
            <TitleDiv>
              <IconButton onClick={handleBack}>
                <ArrowBackIcon
                  style={{ width: "25px", height: "25px", color: "#000000" }}
                />
              </IconButton>
              <TitleText>Remove Liquidity</TitleText>
            </TitleDiv>
            <GasStation />
          </CardTitle>
          <MainDiv>
            <AmountDiv>
              <div>
                <PercentageAmount>Amount</PercentageAmount>
                <PercentageValue>{sliderValue}%</PercentageValue>
              </div>
              <div>
                <SliderContentDiv>
                  <Slider
                    size="small"
                    value={sliderValue}
                    aria-label="Small"
                    valueLabelDisplay="off"
                    onChange={() => handleSliderChange}
                    style={{ color: "#000000" }}
                  />
                </SliderContentDiv>
                <SliderContentButtons>
                  <SliderContentButton
                    onClick={() => handleSliderButtonClick(25)}
                    style={
                      sliderValue === 25
                        ? { color: "#fff", backgroundColor: "#000000" }
                        : { color: "#CFCFCF" }
                    }
                  >
                    25%
                  </SliderContentButton>
                  <SliderContentButton
                    onClick={() => handleSliderButtonClick(50)}
                    style={
                      sliderValue === 50
                        ? { color: "#fff", backgroundColor: "#000000" }
                        : { color: "#CFCFCF" }
                    }
                  >
                    50%
                  </SliderContentButton>
                  <SliderContentButton
                    onClick={() => handleSliderButtonClick(75)}
                    style={
                      sliderValue === 75
                        ? { color: "#fff", backgroundColor: "#000000" }
                        : { color: "#CFCFCF" }
                    }
                  >
                    75%
                  </SliderContentButton>
                  <SliderContentButton
                    onClick={() => handleSliderButtonClick(100)}
                    style={
                      sliderValue === 100
                        ? { color: "#fff", backgroundColor: "#000000" }
                        : { color: "#CFCFCF" }
                    }
                  >
                    MAX
                  </SliderContentButton>
                </SliderContentButtons>
              </div>
            </AmountDiv>
            <TokenDetails>
              <TokenDiv>
                <TokenIcon src={THT} alt="Icon" />
                <TokenText>USDT</TokenText>
              </TokenDiv>
              <TokenValue>10.00</TokenValue>
            </TokenDetails>
            <hr style={{ border: "1px solid #E0E0E0", marginTop: "20px" }} />
            <TokenDetails>
              <TokenDiv>
                <TokenIcon src={ETH} alt="Icon" />
                <TokenText>ETH</TokenText>
              </TokenDiv>
              <TokenValue>0.002355</TokenValue>
            </TokenDetails>
            <RecieveLink>Recieve ETH</RecieveLink>
            <PriceDiv>
              <PriceValue>Price : 1 ETH = 4221 USDT</PriceValue>
              <PriceValue>1 USDT = 0.334 ETH</PriceValue>
            </PriceDiv>
            <PriceDiv>
              <Button
                variant="contained"
                className={classes.Root}
                onClick={handleApprove}
                style={{
                  textTransform: "none",
                  fontWeight: 600,
                  boxShadow: approve
                    ? "none"
                    : "4px 3px 14px 2px rgba(168, 0, 132, 0.19)",
                  background: approve ? "white" : "#000000",
                  color: approve ? "#00C853" : "white",
                  border: approve ? "1px solid #00C853" : "",
                }}
              >
                {Isloading ? (
                  <>
                    <ClipLoader size={20} color={"white"} />
                    &nbsp;&nbsp;Approve
                  </>
                ) : (
                  <>&nbsp;&nbsp; Approve</>
                )}
              </Button>
              {approve ? <RemoveButton /> : <RemoveBtn>Remove</RemoveBtn>}
            </PriceDiv>
          </MainDiv>
        </CardDiv>
        <PositonDiv>
          <Position />
        </PositonDiv>
      </Wrapper>
    </>
  );
};

export default RemoveLiquidity;
