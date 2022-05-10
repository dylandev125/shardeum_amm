import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";
import ethImg from "../../assets/images/eth.svg";
import TokenItem from "./TokenItem";
import ManageToken from "./ManageToken";
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
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
`;
const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  color: #000;
  line-height: 1.6;
  letter-spacing: 0.0075em;
`;
const StyledDivider = styled(Divider)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
`;

const DetailsBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 1rem 1rem;
  margin-bottom: 1rem;

  padding: 1rem;
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
const SearchInput = styled.input`
  border: none;
  border-bottom: 0.5px solid #616161;
  width: 100%;
  color: #616161;
  padding: 0.5rem 0px;
`;
const CommonTokens = styled.div`
  margin: 2rem 0rem;
`;
const TokensTitle = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #212121;
`;
const TokenItems = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem 0rem;
`;
const TokensItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0rem 0.8rem;
  width: fit-content;
  height: 38px;
  border: 1px solid #a80084;
  border-radius: 56px;
  gap: 0.5rem;
`;
const TokenItemName = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  color: #a80084;
`;
const TokenItemIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const Tokens = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height 200px;
  overflow-y: scroll;
  gap: 0.5rem;
  ::-webkit-scrollbar {
    display: none;
  }
`;

interface Props {
  children: React.ReactNode;
}

export default function SelectTokenModal({ children }: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{children}</Button>
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
            <StyledDivider />
          </Header>
          <DetailsBody>
            <SearchInput defaultValue={"Search Tokens"} />
            <CommonTokens>
              <TokensTitle>COMMON BASES</TokensTitle>
              <TokenItems>
                <TokensItem>
                  <TokenItemIcon src={ethImg} />
                  <TokenItemName>Eth</TokenItemName>
                </TokensItem>
                <TokensItem>
                  <TokenItemIcon src={ethImg} />
                  <TokenItemName>Eth</TokenItemName>
                </TokensItem>
              </TokenItems>
            </CommonTokens>
            <Tokens>
              <TokenItem icon={ethImg} title="Eth" description="Ethereum" />
              <TokenItem icon={ethImg} title="Eth" description="Ethereum" />
              <TokenItem icon={ethImg} title="Eth" description="Ethereum" />
              <TokenItem icon={ethImg} title="Eth" description="Ethereum" />
              <TokenItem icon={ethImg} title="Eth" description="Ethereum" />
              <TokenItem icon={ethImg} title="Eth" description="Ethereum" />
            </Tokens>
            <ManageToken children={"Manage token list "} />
          </DetailsBody>
        </StyledBox>
      </Modal>
    </div>
  );
}
