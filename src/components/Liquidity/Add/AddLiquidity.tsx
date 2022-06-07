import React from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import MiniSnackBar from "../../Snackbar/index";
import GasStation from "../Remove/GasStation";
import SelectTokenModal from "../../SelectTokenModal/index";
import AmountInput from "../../SwapModal/Input";
import AddModal from "./AddModal";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";

const Wrapper = styled.div`
  margin-top: 20px;
`;
const CardWrapper = styled.div`
  width: 520px;
  height: 100%;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-shadow: 1px 14px 54px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  margin: 0px auto;
  padding-bottom: 25px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;
const CardTitle = styled.div`
  height: 90px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.5rem;
  padding-right: 1rem;
  @media only screen and (max-width: 600px) {
    height: 80px;
    padding-left: 15px;
    padding-right: 15px;
  }
`;
const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #212121;
`;
const MainDiv = styled.div`
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  @media only screen and (max-width: 600px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;
const InputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledAddBtn = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  box-shadow: 1px 14px 54px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
  margin: 0 auto;
  magrin-top: 20px;
  cursor: pointer;
`;
const PoolDiv = styled.div`
  margin-top: 30px;
`;
const PoolTitle = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  color: #212121;
`;
const PoolValueDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;
const Pool = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const PoolValue = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
`;
const PoolName = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;

const SupplyBtn = styled.button`
  width: 100%;
  height: 55px;
  background: #000000;
  box-shadow: 1px 14px 54px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 26px;
  color: #ffffff;
  margin-top: 25px;
`;

interface Props {
  handleBack: () => void;
}

const AddLiquidity = ({ handleBack }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSuccess = () => {
    handleClose();
    setOpen2(true);
  };
  return (
    <>
      <Wrapper>
        <CardWrapper>
          <CardTitle>
            <TitleDiv>
              <IconButton onClick={handleBack}>
                <ArrowBackIcon
                  style={{ width: "25px", height: "25px", color: "#000000" }}
                />
              </IconButton>
              <Title>Add Liquidity</Title>
            </TitleDiv>
            <GasStation />
          </CardTitle>
          <MainDiv>
            <InputDiv>
              <SelectTokenModal />
              <AmountInput />
            </InputDiv>
            <StyledAddBtn>
              <AddIcon style={{ color: "#ffffff" }} />
            </StyledAddBtn>
            <InputDiv>
              <SelectTokenModal />
              <AmountInput />
            </InputDiv>
            <PoolDiv>
              <PoolTitle>Price and pool share</PoolTitle>
            </PoolDiv>
            <PoolValueDiv>
              <Pool>
                <PoolValue>1379.20</PoolValue>
                <PoolName>USDT Per ETH</PoolName>
              </Pool>
              <Pool>
                <PoolValue>179.20</PoolValue>
                <PoolName>ETH Per USDT</PoolName>
              </Pool>
              <Pool>
                <PoolValue>0.03%</PoolValue>
                <PoolName>Pool Share</PoolName>
              </Pool>
            </PoolValueDiv>
            <SupplyBtn onClick={handleOpen}>Supply</SupplyBtn>
          </MainDiv>
        </CardWrapper>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <AddModal handleClose={handleClose} handleSuccess={handleSuccess} />
        </Modal>
        <MiniSnackBar
          open={open2}
          title="Liquidity added"
          message="Added 6.45 USDT and 4.91 MATIC, View on Explorer"
          severity="success"
          handleClose={() => setOpen2(false)}
        />
      </Wrapper>
    </>
  );
};

export default AddLiquidity;
