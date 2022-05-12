import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";
import TokenItem from "./TokenItem";
import ManageToken from "./ManageToken";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ETH from "../../assets/Tokens/ETH.png";
import THT from "../../assets/Tokens/THT.png";
import BTC from "../../assets/Tokens/BTC.png";
import MATIC from "../../assets/Tokens/MATIC.png";
import USDT from "../../assets/Tokens/USDT.png";

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
  padding: 30px;
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
  }
`;
const StyledDivider = styled(Divider)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
`;
// interface Props {
//   children: React.ReactNode;
// }

export default function SelectTokenModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <TokenButton onClick={handleOpen}>
        <img
          src={ETH}
          alt="ETH"
          style={{
            width: "24px",
            height: "24px",
            marginRight: "5px",
          }}
        />
        ETH
        <KeyboardArrowDownIcon style={{ width: "23px", height: "23px" }} />
      </TokenButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledBox>
          <Header>
            <Title>Select a token</Title>
            <StyledCloseIcon onClick={handleClose} />
            {/* <StyledDivider /> */}
          </Header>
          <DetailsBody>
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
              <TokenItem icon={MATIC} title="MATIC" description="Ethereum" />
              <TokenItem icon={USDT} title="USDT" description="Ethereum" />
              <TokenItem icon={ETH} title="ETH" description="Ethereum" />
              <TokenItem icon={MATIC} title="MATIC" description="Ethereum" />
            </Tokens>
            <ManageToken children={"Manage token list "} />
          </DetailsBody>
        </StyledBox>
      </Modal>
    </>
  );
}
