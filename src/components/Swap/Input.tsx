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
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  position: relative;
  border-bottom: 1px solid #e0e0e0;
  margin-top: 30px;
  padding-bottom: 5px;
  cursor: pointer;
`;

const Label = styled.h4`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #a80084;
  position: absolute;
  top: -18px;
  roght: 0px;
`;
const LabelDown = styled.h4`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #616161;
  position: absolute;
  bottom: -18px;
  roght: 0px;
`;
const StyledInput = styled.input`
  width: 100%;
  border: none;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #616161;
  text-align: right;
  :hover {
    border: none;
  }
  :focus-visible {
    border: none;
    outline: none;
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const Amount = styled.span`
  color: #616161;
  text-decoration: none;
`;
function AmountInput() {
  return (
    <div>
      <Wrapper>
        <Label>
          Balance <Amount>: 0 (-$0.00)</Amount>
        </Label>

        <StyledInput placeholder="Value" type="number" />
        <LabelDown>~$0</LabelDown>
      </Wrapper>
    </div>
  );
}

export default AmountInput;
