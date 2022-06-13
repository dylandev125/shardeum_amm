import React from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import Switch from "@mui/material/Switch";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const Wrapper = styled.div<{ checked: boolean }>`
  height: 85px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
  ${({ checked }) => {
    if (checked) {
      return `
      background: #f0f0f0;`;
    }
  }}
`;
const TokenIcon = styled.img`
  width: 45px;
  height: 45px;
`;
const TokenTitle = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: #616161;
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`;

interface IManageTokenItem {
  icon: string;
  title: string;
}

const label = { inputProps: { "aria-label": "Switch demo" } };

const useStyle = makeStyles((theme) =>
  createStyles({
    switch: {
      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
        backgroundColor: "#000000",
      },
    },
  })
);

export default function ManageTokenItem({ icon, title }: IManageTokenItem) {
  const [checked, setChecked] = React.useState(false);
  const classes = useStyle();
  return (
    <Wrapper checked={checked}>
      <Info>
        <TokenIcon src={icon} alt={title} />
        <TokenTitle>{title}</TokenTitle>
      </Info>
      <Controls>
        <IconButton>
          <SettingsIcon sx={{ color: "#212121" }} />
        </IconButton>
        <Switch
          {...label}
          checked={checked}
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
          className={classes.switch}
          style={{ color: "#000000" }}
        />
      </Controls>
    </Wrapper>
  );
}
