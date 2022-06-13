import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import { Divider } from "@mui/material";
import ethImg from "../../assets/images/eth.svg";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ManageTokenItem from "./ManageTokenItem";

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
  justify-content: flex-start;
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

const ManageTokenListBtn = styled.button`
  width: 100%;
  margin-top: 2rem;
  height: 55px;
  border: none;
  color: #ffffff;
  background: #000000;
  box-shadow: 4px 3px 14px 2px rgba(0, 0, 0, 0.18);
  border-radius: 10px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 26px;
  cursor: pointer;
  :hover {
    opacity: 0.95;
  }
`;

interface Props {
  children: React.ReactNode;
}

export default function ManageToken({ children }: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div style={{ width: "100%" }}>
      <ManageTokenListBtn onClick={handleOpen}>{children}</ManageTokenListBtn>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledBox>
          <Header>
            <StyledIcon onClick={handleClose} />
            <Title>Manage</Title>
            <StyledDivider />
          </Header>
          <DetailsBody>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="LIST" {...a11yProps(0)} />
                  <Tab label="TOKENS" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <SearchInput defaultValue={"Search Tokens"} />
                <Tokens>
                  <ManageTokenItem icon={ethImg} title="Gemini Token List" />
                  <ManageTokenItem icon={ethImg} title="Gemini Token List" />
                  <ManageTokenItem icon={ethImg} title="Gemini Token List" />
                  <ManageTokenItem icon={ethImg} title="Gemini Token List" />
                  <ManageTokenItem icon={ethImg} title="Gemini Token List" />
                  <ManageTokenItem icon={ethImg} title="Gemini Token List" />
                  <ManageTokenItem icon={ethImg} title="Gemini Token List" />
                </Tokens>
              </TabPanel>
              <TabPanel value={value} index={1}>
                Tokens
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
