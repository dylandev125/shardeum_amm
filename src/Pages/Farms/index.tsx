import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Brodcame from "../../Components/Brodcame";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Tabs from "../../Components/Tabs/index";
import "react-circular-progressbar/dist/styles.css";
import { Redirect } from "react-router";
import Gride from "./Gride";
import List from "./List";
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList'
import Select from 'react-select'
const Farm = () => {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <div>
      <Brodcame
        title="Farm"
        content="Stake one token and earn multiple token as rewards with high APY and low risk"
      />
      <div style={{ marginTop: "1rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <TextField
              id="input-with-icon-textfield"
              placeholder="Search by token name, cohort..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </div>
          <div>
            <Tabs />
          </div>
          <div style={{ display: "flex" }}>
         
              <FormControlLabel control={<Switch />} label="Active Pools" />
          
              <FormControlLabel control={<Switch />} label="Tokens I own" />
           
          </div>
          <div>
           <Select placeholder="Sort By"/>
          </div>
          <div>
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
              style={{ height: 40 }}
            >
              <ToggleButton value="left" aria-label="left aligned">
                <ViewListIcon />
              </ToggleButton>
              <ToggleButton value="center" aria-label="centered">
                <GridViewIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
      </div>
      {alignment === "left" ? <List /> : <Gride />}
    </div>
  );
};
export default Farm;
