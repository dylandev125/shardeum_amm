import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ETH from "../../assets/Tokens/ETH.png";
import THT from "../../assets/Tokens/THT.png";
import BTC from "../../assets/Tokens/BTC.png";
import MATIC from "../../assets/Tokens/MATIC.png";
import USDT from "../../assets/Tokens/USDT.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import IconButton from "@mui/material/IconButton";
import TokenItem from "./TokenItem";
import ManageModal from "./ManageModal";

const StyledBox = styled(Box)`
  width: 500px;
  // height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-shadow: 1px 14px 54px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  @media (max-width: 900px) {
    width: 95%;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
`;
const ManageHeader = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
`;
const Title = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;
const DetailsBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem 30px;
`;
const SearchInput = styled.input`
  width: 100%;
  background: transparent;
  outline: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: none;
  border-bottom: 0.5px solid #616161;
  color: #616161;
  padding-bottom: 5px;
`;
const CommonTokens = styled.div`
  margin-top: 30px;
`;
const TokensTitle = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
`;
const TokenItems = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 15px;
  gap: 20px;
`;
const TokensItem = styled.button`
  width: 90px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid #000000;
  border-radius: 55px;
  cursor: pointer;
  background: transparent;
`;
const TokenItemIcon = styled.img`
  width: 24px;
  height: 24px;
`;
const TokenItemName = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
`;
const Tokens = styled.div`
width: 100%;
height 360px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin-top:30px;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 900px) {
  margin-top:1rem;
    height: 230px;
  }
`;

const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
  color: #000;
  padding: 0.5rem;

  :hover {
    background: #e0e0e070;
    padding: 0.5rem;
    opacity: 0.8;
    border-radius: 50%;
  }
`;

const TokenButton = styled(Button)`
  &.MuiButton-root {
    width: 115px;
    height: 38px;
    background: rgb(237, 238, 242);
    box-shadow: rgb(0 0 0 / 8%) 0px 6px 10px;
    color: rgb(0, 0, 0);
    border-radius: 15px;
    border: none;
    font-size: 18px;
    font-weight: 500;
    font-family: Inter;
    font-style: normal;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: none;
    :hover {
      background: #ced0d9 !important;
    }
    @media only screen and (max-width: 600px) {
      width: 30%;
      height: 35px;
      font-size: 14px;
    }
  }
`;
const ManageTokenListBtn = styled.button`
  width: 100%;
  margin-top: 2rem;
  height: 55px;
  border: none;
  color: #ffffff;
  background: #000000;
  box-shadow: 4px 3px 14px 2px rgba(0, 0, 0, 0.18);
  border-radius: 10px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 26px;
  cursor: pointer;
  :hover {
    opacity: 0.95;
  }
`;

interface Props {
  open: boolean;
  handleClose: () => void;
  manage: boolean;
  handleManage: () => void;
  handleBack: () => void;
}

const TokenModal = ({
  open,
  handleClose,
  manage,
  handleManage,
  handleBack,
}: Props) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledBox>
          {manage ? (
            <>
              <ManageHeader>
                <IconButton onClick={handleBack}>
                  <KeyboardBackspaceIcon style={{ color: "#000000" }} />
                </IconButton>
                <Title>Manage Token</Title>
              </ManageHeader>
            </>
          ) : (
            <>
              <Header>
                <Title>Select a Token</Title>
                <StyledCloseIcon onClick={handleClose} />{" "}
              </Header>
            </>
          )}

          <DetailsBody>
            {manage ? (
              <ManageModal />
            ) : (
              <>
                <SearchInput placeholder="Search Tokens" />
                <CommonTokens>
                  <TokensTitle>COMMON BASES</TokensTitle>
                  <TokenItems>
                    <TokensItem>
                      <TokenItemIcon src={ETH} />
                      <TokenItemName>ETH</TokenItemName>
                    </TokensItem>
                    <TokensItem>
                      <TokenItemIcon src={THT} />
                      <TokenItemName>THT</TokenItemName>
                    </TokensItem>
                  </TokenItems>
                </CommonTokens>
                <Tokens>
                  <TokenItem icon={BTC} title="BTC" description="Ethereum" />
                  <TokenItem icon={ETH} title="ETH" description="Ethereum" />
                  <TokenItem
                    icon={MATIC}
                    title="MATIC"
                    description="Ethereum"
                  />
                  <TokenItem icon={USDT} title="USDT" description="Ethereum" />
                  <TokenItem icon={ETH} title="ETH" description="Ethereum" />
                  <TokenItem
                    icon={MATIC}
                    title="MATIC"
                    description="Ethereum"
                  />
                </Tokens>
                <ManageTokenListBtn onClick={handleManage}>
                  Manage Token List
                </ManageTokenListBtn>
              </>
            )}
          </DetailsBody>
        </StyledBox>
      </Modal>
    </>
  );
};

export default TokenModal;
