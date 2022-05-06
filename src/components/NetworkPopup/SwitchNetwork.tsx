import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";
import NetworkItem from "./NetworkItem";
import ethLogo from "../../assets/images/eth.svg";
import aveLogo from "../../assets/images/ave.png";
import bnLogo from "../../assets/images/bn.svg";
import polygonLogo from "../../assets/images/polygon.svg";

const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  border-radius: 5px;
  background-color: #ffffff;
  border: none;
  box-shadow: 24px;

  @media (max-width: 900px) {
    width: 95%;
  }
`;

const Wrapper = styled.div``;
const ConnectWalletButton = styled(Button)`
  &.MuiButton-root {
    background: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-left: 0.5rem;
    padding: 6px 16px;
    letter-spacing: 2px;
    text-indent: 5px;
    height: 45px;
    border: 1px solid #a9a9a9;
    font-weight: 500;
    box-shadow: none;
    text-transform: capitalize;
    color: #000;
    font-weight: 500;
    :hover {
      background: #e6e6e680 !important;
    }
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

const Networks = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 1rem;
  margin-bottom: 1rem;
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
const ButtonImg = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
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

function SwitchNetwork() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [choosenNetwork, setChoosenNetwork] = React.useState(0);

  return (
    <Wrapper>
      <ConnectWalletButton onClick={handleOpen}>
        <ButtonImg
          src={DummyNetworkData[choosenNetwork].icon}
          alt={DummyNetworkData[choosenNetwork].name}
        />
        {DummyNetworkData[choosenNetwork].name}
      </ConnectWalletButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledBox>
          <Header>
            <Title>Switch Network</Title>
            <StyledCloseIcon onClick={handleClose} />
            <StyledDivider />
          </Header>
          <Body>
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
          </Body>
        </StyledBox>
      </Modal>
    </Wrapper>
  );
}

export default SwitchNetwork;
