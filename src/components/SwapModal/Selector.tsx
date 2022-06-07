import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import ethImg from "../../assets/images/eth.svg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const TokenImg = styled.img`
  width: 30px;
  height: 30px;
`;
const TokenSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  position: relative;
  border-bottom: 1px solid #e0e0e0;
  margin-top: 30px;
  padding-bottom: 5px;
  cursor: pointer;
`;
const TokenName = styled.h3`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #212121;
`;
const Label = styled.h4`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #000000;
  position: absolute;
  top: -18px;
  left: 0px;
`;

interface Props {
  label: string;
}

function Selector({ label }: Props) {
  return (
    <div>
      <TokenSelector>
        <Label>{label}</Label>
        <TokenImg src={ethImg} />
        <TokenName>Ethereum</TokenName>
        <ArrowDropDownIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
      </TokenSelector>
    </div>
  );
}

export default Selector;
