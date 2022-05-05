import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 480px;
  border-radius: 15px;
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
const StatusImg = styled.img``;
export default function Dialog() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledBox>
          <Header>
            <Title>Transaction submitted</Title>
            <StyledCloseIcon onClick={handleClose} />
            <StyledDivider />
          </Header>
          <DetailsBody>
            <ReportGmailerrorredIcon />
          </DetailsBody>
        </StyledBox>
      </Modal>
    </div>
  );
}
