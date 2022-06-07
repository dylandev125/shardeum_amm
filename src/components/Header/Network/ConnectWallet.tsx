import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import NetworkItem from "./NetworkItem";
import ethLogo from "../../../assets/images/eth.svg";
import aveLogo from "../../../assets/images/ave.png";
import bnLogo from "../../../assets/images/bn.svg";
import polygonLogo from "../../../assets/images/polygon.svg";
import buttonIcon from "../../../assets/images/buttonicon.png";
import metaLogo from "../../../assets/images/meta.svg";
import walletLogo from "../../../assets/images/wallet.svg";
import bitKeepLogo from "../../../assets/images/bitkeep.png";

const Wrapper = styled.div``;
const ConnectedWalletButton = styled(Button)`
  &.MuiButton-root {
    width: 170px;
    height: 45px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    font-family: "Inter";
    font-style: normal;
    text-transform: none;
    color: #000000;
    background: #ffffff;
    border: 1px solid #a9a9a9;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
`;
const ConnectWalletButton = styled(Button)`
  &.MuiButton-root {
    width: 170px;
    height: 45px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    font-family: "Inter";
    font-style: normal;
    text-transform: none;
    color: #ffffff;
    background: #000000;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      background: #000000;
      box-shadow: 4px 3px 14px 2px rgba(0, 0, 0, 0.18);
    }
  }
`;

const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 570px;
  border-radius: 5px;
  background-color: #ffffff;
  border: none;
  box-shadow: 24px;
  @media (max-width: 900px) {
    width: 95%;
  }
`;
const StyledConnectedBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
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
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
`;
const TitleCont = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 20px;
`;
const Number = styled.span`
  color: #7e96b8;
  padding: 10px;
  background: #dfebff;
  padding-left: 16px;
  border-radius: 10px;
  padding-right: 16px;
`;
const BodyTitle = styled.div`
  color: #191f2a;
  font-size: 18px;
`;
const Networks = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 15px;
  margin-left: 2.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
  color: #000;
  padding: 0.5rem;
  :hover {
    // background: #e0e0e070;
    padding: 0.5rem;
    opacity: 0.8;
    border-radius: 50%;
  }
`;
const WalletIcon = styled.img`
  width: 20px;
  height: 20px;
`;
const DetailsBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 1rem 1rem;
  margin-bottom: 1rem;
  border-radius: 15px;
  border: 1px solid #e0e0e0;
  padding: 1rem;
`;
const DetailsTitle = styled.div`
  margin-bottom: 0.3rem;
`;
const WalletDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const DisconnectBtn = styled.button`
  font-size: 16px;
  color: white;
  text-transform: none;
  background-color: #f07474;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 8px;
  :hover {
    background-color: #cf1436;
  }
`;
const Wallet = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const DetailsCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  gap: 10px;
`;
const DetailsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const DummyNetworkData = [
  {
    name: "Ethereum",
    icon: ethLogo,
  },
  {
    name: "Binance",
    icon: bnLogo,
  },
  {
    name: "Polygon",
    icon: polygonLogo,
  },
  {
    name: "Avalanche",
    icon: aveLogo,
  },
];
const DummyWalletData = [
  {
    name: "MetaMask",
    icon: metaLogo,
  },
  {
    name: "WalletConnect",
    icon: walletLogo,
  },
  {
    name: "BitKeep",
    icon: bitKeepLogo,
  },
];

function ConnectWallet() {
  const [isConnected, setIsConnected] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [choosenNetwork, setChoosenNetwork] = React.useState(0);
  return (
    <Wrapper>
      {isConnected ? (
        <ConnectedWalletButton onClick={handleOpen}>
          0xF1.....sc2
          <WalletIcon src={buttonIcon} alt="icon" />
        </ConnectedWalletButton>
      ) : (
        <ConnectWalletButton onClick={handleOpen}>
          Connect Wallet
        </ConnectWalletButton>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {isConnected ? (
          <StyledConnectedBox>
            <Header>
              <Title>Account Details</Title>
              <StyledCloseIcon onClick={handleClose} />
              <StyledDivider />
            </Header>
            <DetailsBody>
              <DetailsTitle>Connected with MetaMask</DetailsTitle>
              <WalletDetails>
                <Wallet>
                  <WalletIcon src={buttonIcon} alt="icon" />
                  0x8289...EceB
                </Wallet>
                <DisconnectBtn onClick={() => setIsConnected(false)}>
                  Disconnect
                </DisconnectBtn>
              </WalletDetails>
              <DetailsCont>
                <DetailsButton>
                  <ContentCopyRoundedIcon style={{ color: "#616161" }} /> Copy
                  Address
                </DetailsButton>
                <DetailsButton>
                  <OpenInNewRoundedIcon style={{ color: "#616161" }} />
                  View in Explorer
                </DetailsButton>
              </DetailsCont>
            </DetailsBody>
          </StyledConnectedBox>
        ) : (
          <StyledBox>
            <Header>
              <Title>Connect Wallet</Title>
              <StyledCloseIcon onClick={handleClose} />
              <StyledDivider />
            </Header>
            <Body>
              <TitleCont>
                <Number>1</Number>
                <BodyTitle>Choose Network</BodyTitle>
              </TitleCont>
              <Networks>
                {DummyNetworkData.map((item, index) => (
                  <NetworkItem
                    key={index}
                    type="network"
                    id={index}
                    choosen={choosenNetwork}
                    setChoosen={setChoosenNetwork}
                    image={item.icon}
                    text={item.name}
                  />
                ))}
              </Networks>
              <TitleCont>
                <Number>2 </Number>
                <BodyTitle>Choose Wallet</BodyTitle>
              </TitleCont>
              <Networks onClick={() => setIsConnected(true)}>
                {DummyWalletData.map((item, index) => (
                  <NetworkItem
                    key={index}
                    type="wallet"
                    id={index}
                    image={item.icon}
                    text={item.name}
                  />
                ))}
              </Networks>
            </Body>
          </StyledBox>
        )}
      </Modal>
    </Wrapper>
  );
}

export default ConnectWallet;