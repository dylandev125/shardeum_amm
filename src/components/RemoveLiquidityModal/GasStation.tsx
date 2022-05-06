import React, { useState } from "react";
import styled from "styled-components";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import SettingsIcon from "@mui/icons-material/Settings";

const GasWrapper = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 600px) {
    padding-left: 30px;
  }
`;

const useStyle = makeStyles((theme) =>
  createStyles({
    switch: {
      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
        backgroundColor: "#A80084",
      },
    },
  })
);
const GasStation = () => {
  const classes = useStyle();
  const [gasSwitch, setGasSwitch] = useState(true);
  return (
    <>
      <GasWrapper>
        <LocalGasStationIcon
          style={{
            color: gasSwitch ? "#A80084" : "#616161",
            fontWeight: 800,
            marginRight: "0.5rem",
          }}
        />
        <div style={{ width: "100px" }}>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  onChange={(event) => {
                    setGasSwitch(event.target.checked);
                  }}
                  className={classes.switch}
                  style={{ color: gasSwitch ? "#A80084" : "#616161" }}
                />
              }
              label={gasSwitch ? "YES" : "NO"}
            />
          </FormGroup>
        </div>
        <SettingsIcon />
      </GasWrapper>
    </>
  );
};

export default GasStation;
