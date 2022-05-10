import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import { Divider, Radio } from "@mui/material";
import ethImg from "../../assets/images/eth.svg";
import InfoIcon from "@mui/icons-material/Info";
import { IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SettingsIcon from "@mui/icons-material/Settings";
import Tabs from "@mui/material/Tabs";
import CloseIcon from "@mui/icons-material/Close";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import Tab from "@mui/material/Tab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Switch from "@mui/material/Switch";

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
  gap: 1rem;
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
  margin: 0rem 1rem;
  margin-bottom: 1rem;
  padding: 0rem 1rem;
`;
const StyledIcon = styled(ArrowBackIcon)`
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

const Tokens = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height 220px;
  overflow-y: scroll;
  gap: 0.5rem;
  margin-top: 1rem;
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
const GasCont = styled.div`
  width: 100%;
  margin-top: 1rem;
`;
const GasItemCont = styled.div<{ checked: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  width: 100%;
  ${({ checked }) => {
    if (checked) {
      return `
        background: #A8008410;
        `;
    }
    return `
        background: #fff;`;
  }}
`;

const Cont = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const GasTitle = styled.h2`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  display: flex;
  align-items: center;

  /* font/body */

  color: #616161;
`;
const Description = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  display: flex;
  align-items: center;

  /* font/body */

  color: #616161;
`;
const GasHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const GasBody = styled.div``;
const GasItemSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const GasItemTitle = styled.h2`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  display: flex;
  align-items: center;

  /* font/body */

  color: #616161;
`;
const GasItemDescription = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */
  margin-right: 0.8rem;
  display: flex;
  align-items: center;

  /* font/body */

  color: #616161;
`;
const StyledRadio = styled(Radio)`
  margin: 0px;
  padding: 0px;
`;
const CurrentGasCont = styled.div`
  background: #d8f3ff;
  /* alert_informartion/active */

  border: 1px solid #03a9f4;
  border-radius: 8px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  padding: 0rem 0.5rem;
  margin: 1rem 0rem;
`;
const GasInfo = styled.h3`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */

  display: flex;
  align-items: center;

  /* alert_informartion/active */

  color: #03a9f4;
`;

const InputsCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const InputCont = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
const Input = styled.input`
  border: none;
  height: 35px;
  border-bottom: 1px solid #616161 !important;
  font-size: 14px;
  width: 100%;
  :focus-visible {
    border: none;
    outline: none;
  }
`;
const InputLabel = styled.label`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  /* font/body */

  color: #616161;
`;

const ToleranceCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;
const Percentages = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #a80084;
  border-radius: 4px;
  width: fit-content;
`;
const Percentage = styled.div`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */
  width: 75px;
  height: 40px;
  text-transform: uppercase;
  color: #a80084;
  border-right: 1px solid #a80084;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DeadlineCont = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: flex-end;
  gap: 1rem;
`;
const DeadlineInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

const Mins = styled.div`
  position: absolute;
  right: 0px;
  top: 50%;
`;

const TokenUnlockCont = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
`;

export default function SettingsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState(0);
  const [checked, setChecked] = React.useState(2);
  const [gasOptions, setGasOptions] = React.useState(false);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <IconButton onClick={handleOpen}>
        <SettingsIcon sx={{ color: "#212121" }} />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledBox>
          <Header>
            <Title>Settings</Title>
            <StyledCloseIcon onClick={handleClose} />
            <StyledDivider />
          </Header>
          <DetailsBody>
            <GasCont>
              <GasHeader>
                <Cont>
                  <GasTitle>
                    <LocalGasStationIcon />
                    Gas
                  </GasTitle>
                </Cont>
                <Cont>
                  <Description>Medium (41.76 - 43.76 Gwei)</Description>
                  <IconButton onClick={() => setGasOptions(!gasOptions)}>
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </Cont>
              </GasHeader>
              {gasOptions && (
                <GasBody>
                  <GasItemCont checked={checked === 1}>
                    <GasItemSection>
                      <StyledRadio
                        color="secondary"
                        onClick={() => setChecked(1)}
                        checked={checked === 1}
                      />
                      <GasItemTitle>High</GasItemTitle>
                    </GasItemSection>
                    <GasItemSection>
                      <GasItemDescription>
                        67.20 - 72.20 Gwei
                      </GasItemDescription>
                    </GasItemSection>
                  </GasItemCont>
                  <GasItemCont checked={checked === 2}>
                    <GasItemSection>
                      <StyledRadio
                        color="secondary"
                        onClick={() => setChecked(2)}
                        checked={checked === 2}
                      />
                      <GasItemTitle>High</GasItemTitle>
                    </GasItemSection>
                    <GasItemSection>
                      <GasItemDescription>
                        67.20 - 72.20 Gwei
                      </GasItemDescription>
                    </GasItemSection>
                  </GasItemCont>
                  <GasItemCont checked={checked === 3}>
                    <GasItemSection>
                      <StyledRadio
                        color="secondary"
                        onClick={() => setChecked(3)}
                        checked={checked === 3}
                      />
                      <GasItemTitle>High</GasItemTitle>
                    </GasItemSection>
                    <GasItemSection>
                      <GasItemDescription>
                        67.20 - 72.20 Gwei
                      </GasItemDescription>
                    </GasItemSection>
                  </GasItemCont>
                </GasBody>
              )}
            </GasCont>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Basic" {...a11yProps(0)} />
                  <Tab label="Advanced" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}></TabPanel>
              <TabPanel value={value} index={1}>
                <CurrentGasCont>
                  <InfoIcon sx={{ color: "#03a9f4" }} />
                  <GasInfo>
                    Current base fee is <b>58.35 Gwei</b>
                  </GasInfo>
                </CurrentGasCont>

                <InputsCont>
                  <InputCont>
                    <InputLabel>Max priority fee</InputLabel>
                    <Input type="number" placeholder="Enter gas price" />
                    <InputLabel>Text</InputLabel>
                  </InputCont>
                  <InputCont>
                    <InputLabel>Label</InputLabel>
                    <Input type="number" placeholder="Enter gas price" />
                    <InputLabel>Text</InputLabel>
                  </InputCont>
                </InputsCont>

                <ToleranceCont>
                  <InputLabel>Slippage Tolerance</InputLabel>
                  <Percentages>
                    <Percentage>0.1%</Percentage>
                    <Percentage>1.5%</Percentage>
                    <Percentage>3.0%</Percentage>
                    <Percentage>
                      <Input
                        type="number"
                        style={{ textAlign: "center", color: "#A80084" }}
                      />
                    </Percentage>
                  </Percentages>
                  <InputLabel style={{ color: "#A80084" }}>
                    Your transaction may be frontrun
                  </InputLabel>
                </ToleranceCont>

                <DeadlineCont>
                  <DeadlineInput>
                    <InputLabel>Deadline</InputLabel>
                    <Input
                      type="number"
                      style={{
                        color: "#A80084",
                        height: "30px",
                      }}
                    />
                    <Mins>Mins</Mins>
                  </DeadlineInput>
                  <TokenUnlockCont>
                    <InputLabel style={{ color: "#000" }}>
                      Unlock Tokens Permanently
                    </InputLabel>
                    <Switch color="secondary" />
                  </TokenUnlockCont>
                </DeadlineCont>
              </TabPanel>
            </Box>
          </DetailsBody>
        </StyledBox>
      </Modal>
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: "25px 0px" }}>{children}</Box>}
    </div>
  );
}
