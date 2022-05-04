import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import SettingsIcon from "@mui/icons-material/Settings";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@mui/material/Slider";

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
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
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

const useStyle = makeStyles((theme) =>
  createStyles({
    switch: {
      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
        backgroundColor: "#673AB7",
      },
    },
  })
);

const RemoveLiquidityModal = () => {
  const classes = useStyle();
  const [gasSwitch, setGasSwitch] = useState(true);
  const [sliderValue, setSliderValue] = useState(25);
  const handleSliderChange = (event: Event, newValue: number) => {
    setSliderValue(newValue);
  };
  const handleSliderButtonClick = (value: number) => {
    setSliderValue(value);
  };
  return (
    <div>
      <div style={{ marginTop: "50px" }}>
        <CardDiv>
          <CardTitle
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <TitleDiv>
              <ArrowBackIcon style={{ width: "25px", height: "25px" }} />
              <TitleText>Remove Liquidity</TitleText>
            </TitleDiv>
            <div style={{ display: "flex", alignItems: "center" }}>
              <LocalGasStationIcon
                style={{
                  color: gasSwitch ? "#673AB7" : "#616161",
                  fontWeight: 800,
                  marginRight: "0.5rem",
                }}
              />
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      defaultChecked
                      onChange={(event) => {
                        setGasSwitch(event.target.checked);
                      }}
                      className={classes.switch}
                      style={{ color: gasSwitch ? "#673AB7" : "#616161" }}
                    />
                  }
                  label={gasSwitch ? "YES" : "NO"}
                />
              </FormGroup>
              <SettingsIcon />
            </div>
          </CardTitle>
          <div style={{ border: "1px solid #E0E0E0" }}></div>
          <div
            style={{
              padding: "30px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <div>
                  <div>Amount</div>
                  <div>75%</div>
                </div>
              </div>
              <div>
                <SliderContentDiv>
                  <Slider
                    size="small"
                    value={sliderValue}
                    aria-label="Small"
                    valueLabelDisplay="off"
                    onChange={handleSliderChange}
                  />
                </SliderContentDiv>
                <SliderContentButtons>
                  <SliderContentButton
                    onClick={() => handleSliderButtonClick(25)}
                    style={
                      sliderValue === 25
                        ? { color: "#fff", backgroundColor: "#673AB7" }
                        : { color: "#CFCFCF" }
                    }
                  >
                    25%
                  </SliderContentButton>
                  <SliderContentButton
                    onClick={() => handleSliderButtonClick(50)}
                    style={
                      sliderValue === 50
                        ? { color: "#fff", backgroundColor: "#673AB7" }
                        : { color: "#CFCFCF" }
                    }
                  >
                    50%
                  </SliderContentButton>
                  <SliderContentButton
                    onClick={() => handleSliderButtonClick(75)}
                    style={
                      sliderValue === 75
                        ? { color: "#fff", backgroundColor: "#673AB7" }
                        : { color: "#CFCFCF" }
                    }
                  >
                    75%
                  </SliderContentButton>
                  <SliderContentButton
                    onClick={() => handleSliderButtonClick(100)}
                    style={
                      sliderValue === 100
                        ? { color: "#fff", backgroundColor: "#673AB7" }
                        : { color: "#CFCFCF" }
                    }
                  >
                    MAX
                  </SliderContentButton>
                </SliderContentButtons>
              </div>
            </div>
          </div>
        </CardDiv>
      </div>
    </div>
  );
};

export default RemoveLiquidityModal;
