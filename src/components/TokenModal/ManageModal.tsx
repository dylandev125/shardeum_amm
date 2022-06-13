import React from "react";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { makeStyles } from "@material-ui/core";
import styled from "styled-components";
import ethImg from "../../assets/images/eth.svg";
import ManageTokenItem from "./ManageTokenItem";

const useStyles = makeStyles((theme) => ({
  root: {
    "&>.MuiTabs-scroller .MuiTabs-flexContainer .MuiButtonBase-root.Mui-selected":
      {
        width: "50% !important",
        color: "#000000 !important",
        fontWeight: 600,
        fontFamily: "inter",
        background: "#E5E5E5",
        [theme.breakpoints.down("xs")]: {
          width: "50% !important",
        },
      },
    "&>.MuiTabs-scroller .MuiTabs-flexContainer .MuiButtonBase-root": {
      width: "50% !important",
      fontWeight: 600,
      color: "#616161",
      fontFamily: "inter",
      [theme.breakpoints.down("xs")]: {
        width: "50% !important",
      },
    },
    "&>.MuiTabs-scroller .css-1aquho2-MuiTabs-indicator": {
      backgroundColor: "#000000 !important",
    },
  },
}));

const ListWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
`;
const SearchInput = styled.input`
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  border: none;
  border-bottom: 0.5px solid #616161;
  color: #616161;
  padding: 0.5rem 0px;
  :focus {
    outline: none;
  }
`;
const Tokens = styled.div`
  width: 100%;
  height 260px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    margin-top: 1rem;
    ::-webkit-scrollbar {
      display: none;
    }
  `;

const ManageModal = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          aria-label="basic tabs example"
          value={value}
          className={classes.root}
          onChange={handleChange}
        >
          <Tab label="LIST" value={0} />
          <Tab label="TOKENS" value={1} />
        </Tabs>
      </Box>
      {value == 0 ? (
        <>
          <ListWrapper>
            <SearchInput placeholder="https//: or ipfs//: or ENS Name" />
            <Tokens>
              <ManageTokenItem icon={ethImg} title="Gemini Token List" />
              <ManageTokenItem icon={ethImg} title="Gemini Token List" />
              <ManageTokenItem icon={ethImg} title="Gemini Token List" />
              <ManageTokenItem icon={ethImg} title="Gemini Token List" />
              <ManageTokenItem icon={ethImg} title="Gemini Token List" />
              <ManageTokenItem icon={ethImg} title="Gemini Token List" />
              <ManageTokenItem icon={ethImg} title="Gemini Token List" />
            </Tokens>
          </ListWrapper>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default ManageModal;
