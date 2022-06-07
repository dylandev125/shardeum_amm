import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import Box from "@mui/material/Box";
import ClipLoader from "react-spinners/ClipLoader";
import ETH from "../../../assets/Tokens/ETH.png";
import Warning from "../../../assets/images/warning.png";
import Metamask from "../../../assets/images/metamask.png";
import Successfull from "../../../assets/images/Successfull.png";

const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 480px;
  border-radius: 5px;
  background-color: #ffffff;
  border: none;
  box-shadow: 24px;
  @media (max-width: 900px) {
    width: 95%;
  }
`;
const BoxTitleDiv = styled.div`
  height: 75px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 25px;
  padding-right: 25px;
  @media (max-width: 900px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;
const BoxTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #212121;
`;
const BoxDetails = styled.div`
  padding: 25px;
  @media (max-width: 900px) {
    padding: 15px;
  }
`;
const ReceiveTitle = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #616161;
  @media (max-width: 900px) {
    font-size: 12px;
  }
`;
const TokenDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TokenValue = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #212121;
  @media (max-width: 900px) {
    font-size: 16px;
  }
`;
const TokenIconInfo = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
const TokenIcon = styled.img`
  width: 30px;
  height: 30px;
`;
const TokenName = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  @media (max-width: 900px) {
    font-size: 12px;
  }
`;
const Rates = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #616161;
  margin-top: 30px;
  @media (max-width: 900px) {
    font-size: 12px;
    margin-top: 1rem;
  }
`;
const ConfirmBtn = styled.button`
  width: 100%;
  height: 55px;
  background: #000000;
  box-shadow: 1px 14px 54px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 26px;
  color: #ffffff;
  border: none;
  margin-top: 30px;
  cursor: pointer;
  @media (max-width: 900px) {
    height: 45px;
    font-size: 14px;
    margin-top: 1rem;
  }
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
  @media (max-width: 900px) {
    font-size: 12px;
  }
`;
const PoolName = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  @media (max-width: 900px) {
    font-size: 12px;
  }
`;
const WaitingDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 25px;
  padding-bottom: 25px;
  @media (max-width: 900px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;
const WaitText = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #616161;
  text-align: center;
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`;
const SubmitDetails = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 25px;
`;
const WarningIcon = styled.img`
  width: 60px;
  height: 55px;
  margin-top: 30px;
  @media (max-width: 900px) {
    width: 55px;
    height: 50px;
    margin-top: 1rem;
  }
`;
const SuccessfullIcon = styled.img`
  width: 70px;
  height: 55px;
  margin-top: 30px;
  @media (max-width: 900px) {
    width: 55px;
    height: 50px;
    margin-top: 1rem;
  }
`;
const WarningText = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #616161;
  margin-top: 25px;
  @media (max-width: 900px) {
    font-size: 12px;
    margin-top: 1rem;
  }
`;
const ViewLink = styled.a`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
  text-decoration: none;
  @media (max-width: 900px) {
    font-size: 12px;
  }
`;
const AddMetamask = styled.div`
  width: 100%;
  height: 55px;
  border: 1px solid #000000;
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 20px;
  cursor: pointer;
  @media (max-width: 900px) {
    height: 45px;
    font-size: 14px;
    margin-top: 1rem;
  }
`;

const MetamaskIcon = styled.img`
  width: 25px;
  height: 25px;
`;

interface Props {
  handleClose: () => void;
  handleSuccess: () => void;
}

const AddModal = ({ handleClose, handleSuccess }: Props) => {
  const [step, setStep] = useState(0);

  const handleWait = () => {
    setStep(1);
    setTimeout(() => {
      setStep(2);
    }, 1500);
  };

  const handleMetamask = () => {
    setStep(3);
  };

  return (
    <>
      <StyledBox>
        {step === 0 ? (
          <>
            <BoxTitleDiv>
              <BoxTitle>Confirm Supply</BoxTitle>
              <CloseIcon onClick={handleClose} />
            </BoxTitleDiv>
            <BoxDetails>
              <ReceiveTitle>You will Recieve</ReceiveTitle>
              <TokenDetails>
                <TokenValue>0.0000151216511</TokenValue>
                <TokenIconInfo>
                  <TokenIcon src={ETH} />
                  <TokenName>USDT</TokenName>/
                  <TokenIcon src={ETH} />
                  <TokenName>USDT</TokenName>
                </TokenIconInfo>
              </TokenDetails>
              <Rates>Rates</Rates>
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
              <ConfirmBtn onClick={handleWait}>Confirm Supply</ConfirmBtn>
            </BoxDetails>
          </>
        ) : step === 1 ? (
          <>
            <WaitingDiv>
              <ClipLoader size={20} color={"black"} />
              <WaitText>Waiting for Confirmation</WaitText>
              <WaitText>Supplying 19.32 ETH for 179.20 USDT</WaitText>
            </WaitingDiv>
          </>
        ) : step === 2 ? (
          <>
            <BoxTitleDiv>
              <BoxTitle>Transaction Submitted</BoxTitle>
              <CloseIcon onClick={handleClose} />
            </BoxTitleDiv>
            <SubmitDetails>
              <WarningIcon src={Warning} />
              <WarningText>Transaction Submitted</WarningText>
              <ViewLink href="#">View on Explorer</ViewLink>
              <AddMetamask onClick={handleMetamask}>
                <MetamaskIcon src={Metamask} />
                Add LP Token in Metamask
              </AddMetamask>
            </SubmitDetails>
          </>
        ) : step === 3 ? (
          <>
            <BoxTitleDiv>
              <BoxTitle>Transaction Submitted</BoxTitle>
              <CloseIcon onClick={handleClose} />
            </BoxTitleDiv>
            <SubmitDetails>
              <SuccessfullIcon src={Successfull} />
              <WarningText>Transaction is added successfully</WarningText>
              <ViewLink href="#">View on Explorer</ViewLink>
              <AddMetamask onClick={handleSuccess}>
                <MetamaskIcon src={Metamask} />
                Add LP Token in Metamask
              </AddMetamask>
            </SubmitDetails>
          </>
        ) : (
          ""
        )}
      </StyledBox>
    </>
  );
};

export default AddModal;
