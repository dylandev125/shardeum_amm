import React, { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import styled from "styled-components";
import Button from "@mui/material/Button";
import buttonIcon from "../../../assets/images/buttonicon.png";
import { AbstractConnector } from "@web3-react/abstract-connector";

import ConnectModal from './ConnectModal';
// import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

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

const WalletIcon = styled.img`
  width: 20px;
  height: 20px;
`;


const getShortAddress = (address : string) => {
  return address.slice(0, 6) + '...' + address.substr(address.length - 4);
}

function ConnectWallet() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [, setActiveConnector] = useState<AbstractConnector | undefined>(undefined);
  const { active, connector, account } = useWeb3React();

  useEffect(() => {
      return setActiveConnector(connector);
    }, [active, account, connector]);

    useEffect(() => {
      return setActiveConnector(connector);
    }, [active, account, connector]);

  return (
    <Wrapper>
      {active ? (
        <ConnectedWalletButton onClick={handleOpen}>
          {getShortAddress(account ? account : '')}
          <WalletIcon src={buttonIcon} alt="icon" />
        </ConnectedWalletButton>
      ) : (
        <ConnectWalletButton onClick={handleOpen}>
          Connect Wallet
        </ConnectWalletButton>
      )}

      <ConnectModal
        open={open}
        onClose={handleClose}
      />
    </Wrapper>
  );
}

export default ConnectWallet;
