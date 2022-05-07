import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";
import warningImg from "../../assets/images/warning.png";
import successImg from "../../assets/images/success.png";
import metamaskImg from "../../assets/images/metamask.png";

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
  align-items: center;
  gap: 1rem;
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
const StatusImg = styled.img`
  width: 55px;
  object-fit: contain;
  height: 55px;
`;
const P = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */

  text-align: center;

  /* font/body */

  color: #616161;
`;
const StyledButton = styled.button`
  width: 100%;
  height: 55px;
  border: 1px solid #a80084;
  border-radius: 10px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 26px;
  text-align: center;
  background-color: transparent;
  color: #a80084;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
const Link = styled.a`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #a80084;
  text-decoration: none;
`;
const Icon = styled.img`
  width: 22px;
  height: 22px;
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: 1rem;
`;
const MyButton = styled.button<{ default: boolean }>`
  width: 50%;
  height: 55px;
  border: 1px solid #a80084;
  border-radius: 10px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 26px;
  text-align: center;
  background-color: ${(props) => (props.default ? "#a80084" : "#fff")};
  color: ${(props) => (props.default ? "#fff" : "#a80084")};
`;

interface Props {
  transaction: "submitted" | "added" | "successful";
}

export default function Dialog({ transaction }: Props) {
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
            {transaction === "submitted" && (
              <Title>Transaction submitted</Title>
            )}
            {transaction === "added" && <Title>Added Successfully</Title>}
            {transaction === "successful" && (
              <Title>Transaction Successful</Title>
            )}

            <StyledCloseIcon onClick={handleClose} />
            <StyledDivider />
          </Header>
          <DetailsBody>
            <StatusImg
              src={transaction === "submitted" ? warningImg : successImg}
              alt="warning"
            />
            <P> Transaction has been submitted successfully </P>
            <Link>View on Explorer</Link>
            {transaction === "successful" && (
              <Buttons>
                <MyButton default>New Trade</MyButton>
                <MyButton default={false}>Share</MyButton>
              </Buttons>
            )}
            <StyledButton>
              <Icon src={metamaskImg} /> Add LP Token in Metamask
            </StyledButton>
          </DetailsBody>
        </StyledBox>
      </Modal>
    </div>
  );
}
