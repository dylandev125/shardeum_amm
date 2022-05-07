import React from "react";
import styled from "styled-components";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import THT from "../../assets/Tokens/THT.png";
import ETH from "../../assets/Tokens/ETH.png";
import CircularProgress from "@mui/material/CircularProgress";
import warningImg from "../../assets/images/warning.png";
import metamask from "../../assets/images/metamask.png";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const RemoveBtn = styled.button`
  width: 50%;
  height: 55px;
  background: #a80084;
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 26px;
  color: #ffffff;
  text-align: center;
  border: none;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
const TitleDiv = styled.div`
  height: 30px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;
const DetailsDiv = styled.div`
  padding: 25px;
  @media only screen and (max-width: 600px) {
    padding: 15px;
  }
`;
const Recieve = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;
const RecieveValue = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #212121;
`;
const SupplyBtn = styled.button`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #673ab7;
  box-shadow: 0px 7px 18px -2px rgba(103, 58, 183, 0.56);
  border-radius: 10px;
  border: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 26px;
  color: #ffffff;
  cursor: pointer;
`;
const RecieveValueDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: start;
  }
`;
const TokenDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: start;
    margin-top: 20px;
  }
`;
const TokenDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const RatesDiv = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  margin-top: 30px;
  margin-bottom: 30px;
`;
const RatesDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }
`;
const RatesDetailsDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    align-items: start;
  }
`;
const RatesValue = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #673ab7;
`;
const RatesLabel = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #212121;
`;
const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const WaitDiv = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  margin-top: 50px;
`;
const SupplyingDiv = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 24px;
  margin-top: 10px;
`;
const SubmitText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;
const ViewLink = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #673ab7;
  text-decoration: none;
`;
const TokenButton = styled.button`
  width: 100%;
  border: 1px solid #673ab7;
  border-radius: 10px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 26px;
  color: #673ab7;
  background: white;
  margin-top: 30px;
  gap: 10px;
`;

const useStyle = makeStyles((theme) =>
  createStyles({
    Box: {
      position: "absolute" as "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "500px",
      background: "#ffffff",
      boxShadow: "0px 24px 38px 3px rgba(0, 0, 0, 0.14)",
      border: "1px solid #A9A9A9",
      borderRadius: "15px",
      [theme.breakpoints.down("xs")]: {
        width: "95%",
      },
    },
  })
);

const RemoveButton = () => {
  const classes = useStyle();

  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Submit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <>
      <RemoveBtn onClick={handleOpen}>Remove</RemoveBtn>
      {open ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className={classes.Box}>
            <TitleDiv>
              {submitted ? (
                <Title>Transaction Submitted</Title>
              ) : (
                <Title>Remove Supply</Title>
              )}
              <CloseIcon onClick={handleClose} />
            </TitleDiv>
            <div style={{ border: "1px solid rgb(224, 224, 224)" }}></div>
            <DetailsDiv>
              {loading ? (
                <>
                  <LoadingDiv>
                    <CircularProgress style={{ color: "black" }} />
                    <WaitDiv>Waiting for Confirmation</WaitDiv>
                    <SupplyingDiv>
                      Supplying 19.32 ETH for 179.20 USDT
                    </SupplyingDiv>
                  </LoadingDiv>
                </>
              ) : (
                <>
                  {submitted ? (
                    <>
                      <LoadingDiv>
                        <img
                          src={warningImg}
                          style={{ width: "60px", height: "55px" }}
                        />
                        <SubmitText>Transaction submitted</SubmitText>
                        <ViewLink>
                          <a href="#" style={{ textDecoration: "none" }}>
                            View on Explorer
                          </a>
                        </ViewLink>
                        <TokenButton>
                          <img
                            src={metamask}
                            style={{ width: "20px", height: "20px" }}
                          />
                          Add LP Token in Metamask
                        </TokenButton>
                      </LoadingDiv>
                    </>
                  ) : (
                    <>
                      <div>
                        <Recieve>you will recieve</Recieve>
                      </div>
                      <RecieveValueDiv>
                        <RecieveValue>0.0000151216511</RecieveValue>
                        <TokenDetails>
                          <TokenDiv>
                            <img
                              src={THT}
                              style={{ width: "30px", height: "30px" }}
                            />
                            <Recieve>USDT</Recieve>
                            <div>/</div>
                          </TokenDiv>
                          <TokenDiv>
                            <img
                              src={ETH}
                              style={{ width: "30px", height: "30px" }}
                            />
                            <Recieve>ETH Pool Token</Recieve>
                          </TokenDiv>
                        </TokenDetails>
                      </RecieveValueDiv>
                      <RatesDiv>Rates</RatesDiv>
                      <RatesDetails>
                        <RatesDetailsDiv>
                          <RatesValue>1379.20</RatesValue>
                          <RatesLabel>USDT Per ETH</RatesLabel>
                        </RatesDetailsDiv>
                        <RatesDetailsDiv>
                          <RatesValue>1379.20</RatesValue>
                          <RatesLabel>USDT Per USDT</RatesLabel>
                        </RatesDetailsDiv>
                        <RatesDetailsDiv>
                          <RatesValue>0.03%</RatesValue>
                          <RatesLabel>Pool Share</RatesLabel>
                        </RatesDetailsDiv>
                      </RatesDetails>
                      <SupplyBtn onClick={Submit}>Remove Supply</SupplyBtn>
                    </>
                  )}
                </>
              )}
            </DetailsDiv>
          </Box>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

export default RemoveButton;
