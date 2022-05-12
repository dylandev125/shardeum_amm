import React from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import Switch from "@mui/material/Switch";
const Wrapper = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
  padding: 10px 10px;

  ${({ checked }) => {
    if (checked) {
      return `
        background: #00000010;
        `;
    }
    return `
        background: #fff;`;
  }}
`;
const TokenIcon = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 30px;
`;
const TokenTitle = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #616161;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`;
const Controls = styled.div`
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
export default function ManageTokenItem({ icon, title }: IManageTokenItem) {
  const [checked, setChecked] = React.useState(false);
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
          color="secondary"
        />
      </Controls>
    </Wrapper>
  );
}
