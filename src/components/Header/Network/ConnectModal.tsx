import React, { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { wallets } from '../../../constants';
import { AbstractConnector } from "@web3-react/abstract-connector";
import NetworkItem from "./NetworkItem";
import ethLogo from "../../../assets/images/eth.svg";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import buttonIcon from "../../../assets/images/buttonicon.png";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

interface Props {
    open: boolean;
    onClose: () => void;
}

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

const getShortAddress = (address : string) => {
    return address.slice(0, 6) + '...' + address.substr(address.length - 4);
}

const DummyNetworkData = [
    {
      name: "Shardeum",
      icon: ethLogo,
    },
];

const ConnectModal = ({ open, onClose } : Props) => {
    const { active, activate, deactivate, account } = useWeb3React();
    const [, setActiveConnector] = useState<AbstractConnector | undefined>(undefined);

    const activation = async (connector: AbstractConnector | undefined) => {
        // if (connector instanceof WalletConnectConnector) {
        //   walletconnect(appChainId).walletConnectProvider = undefined;
        // }
        connector &&
          activate(connector, undefined, true)
            .then(() => {
              setActiveConnector(connector);
              onClose();
            })
            .catch(() => {
                onClose();
            });
        }

    return (
        <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {active ? (
          <StyledConnectedBox>
            <Header>
              <Title>Account Details</Title>
              <StyledCloseIcon onClick={() => onClose()} />
              <StyledDivider />
            </Header>
            <DetailsBody>
              <DetailsTitle>Connected with MetaMask</DetailsTitle>
              <WalletDetails>
                <Wallet>
                  <WalletIcon src={buttonIcon} alt="icon" />
                  {getShortAddress(account ? account : '')}
                </Wallet>
                <DisconnectBtn onClick={() => {
                  onClose();
                  deactivate();
                  console.log(account);
                }}>
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
              <StyledCloseIcon onClick={() => onClose()} />
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
                    choosen={0}
                    image={item.icon}
                    text={item.name}
                    onWalletClick={() =>{}}
                  />
                ))}
              </Networks>
              <TitleCont>
                <Number>2 </Number>
                <BodyTitle>Choose Wallet</BodyTitle>
              </TitleCont>
              <Networks onClick={() => {}}>
                {Object.keys(wallets).map((key, index) => {
                  const provider = wallets[key]
                  // console.log(provider);
                  return (
                    <NetworkItem
                      key={index}
                      type="wallet"
                      id={index}
                      image={provider.logoUri}
                      text={provider.name}
                      onWalletClick={ () => {
                        return activation(provider.connector(3));
                      }
                      }
                    />
                  );
                })}

              </Networks>
            </Body>
          </StyledBox>
        )}
      </Modal>
    )
}

export default ConnectModal;