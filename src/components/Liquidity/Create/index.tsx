import React, { useState } from "react";
import styled from "styled-components";
import SettingsIcon from "@mui/icons-material/Settings";
import { IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddIcon from "@mui/icons-material/Add";
import TokenModal from "../../TokenModal";

const PoolWrapper = styled.div`
  width: 510px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-shadow: 1px 14px 54px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  margin: 0px auto;
  margin-top: 1rem;
`;
const PoolHeader = styled.div`
  height: 80px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
`;
const PoolTitle = styled.span`
  font-size: 18px;
  line-height: 25px;
  font-weight: 700;
  font-family: "Inter";
  font-style: normal;
`;
const PoolDetails = styled.div`
  padding: 2rem;
`;
const InputDiv = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  cursor: pointer;
  background: #ffffff;
`;
const InputDetails = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
const InputIcon = styled.img`
  width: 30px;
  height: 30px;
`;
const InputText = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #212121;
`;

const AddStyledBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #000000;
  box-shadow: 4px 3px 14px 2px rgba(0, 0, 0, 0.18);
  border-radius: 50%;
  margin: 0px auto;
  margin-top: 40px;
  margin-bottom: 30px;
`;
const TokenBtn = styled.div`
  width: 100%;
  height: 45px;
  background: #e0e0e0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 600;
  font-style: normal;
  font-family: "Inter";
  color: #a9a9a9;
  border: none;
  cursor: pointer;
  margin-top: 40px;
`;
const PositionDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  font-family: "Inter";
  font-style: normal;
  color: #000000;
  margin-top: 1rem;
  cursor: pointer;
`;

const Create = () => {
  const [manage, setManage] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <PoolWrapper>
        <PoolHeader>
          <PoolTitle>Import Pool</PoolTitle>
          <IconButton>
            <SettingsIcon style={{ color: "#212121" }} />
          </IconButton>
        </PoolHeader>
        <PoolDetails>
          <InputDiv onClick={() => setOpen(true)}>
            <InputDetails>
              {/* <InputIcon /> */}
              <InputText>Select Coin</InputText>
            </InputDetails>
            <ArrowDropDownIcon style={{ color: "#808080" }} />
          </InputDiv>
          <AddStyledBtn>
            <AddIcon
              style={{ width: "30px", height: "30px", color: "white" }}
            />
          </AddStyledBtn>
          <InputDiv>
            <InputDetails>
              {/* <InputIcon /> */}
              <InputText>Select Coin</InputText>
            </InputDetails>
            <ArrowDropDownIcon style={{ color: "#808080" }} />
          </InputDiv>
          <TokenBtn>Select a token to find your liquidity</TokenBtn>
          <PositionDiv>View Position</PositionDiv>
        </PoolDetails>
      </PoolWrapper>
      <TokenModal
        open={open}
        handleClose={() => setOpen(false)}
        manage={manage}
        handleManage={() => setManage(true)}
        handleBack={() => setManage(false)}
      />
    </>
  );
};

export default Create;
