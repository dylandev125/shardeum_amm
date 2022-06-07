import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 5px;
  margin-top: 30px;
  cursor: pointer;
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
  roght: 0px;
`;
const LabelDown = styled.h4`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  color: #616161;
  position: absolute;
  bottom: -18px;
  roght: 0px;
  text-decoration: underline;
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
        <LabelDown>MAX</LabelDown>
      </Wrapper>
    </div>
  );
}

export default AmountInput;
