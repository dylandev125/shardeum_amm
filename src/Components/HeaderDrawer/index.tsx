import { Button, Container, MenuItem } from "@material-ui/core";
import Divider from "@mui/material/Divider";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import { useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import clsx from "clsx";
import React, { useState } from "react";
import "react-pro-sidebar/dist/css/styles.css";
import Sidebar from "../SideBar/index";
import "../SideBar/SideBar.scss";
import useStyles from "./style";

import Setting from "../../assets/images/others/setting.svg";
import Nofification from "../../assets/images/others/notification.svg";

import Modal from "../Modal/index";
import Wallet from "../Wallets/Wallet";
import MetaMask from "../../assets/images/connectors/MetaMask.png";
import trustWallet from "../../assets/images/connectors/trustWallet.png";

import coinbasewallet from "../../assets/images/connectors/coinbasewallet.png";
import binancewallet from "../../assets/images/connectors/binance-wallet.jpg";
import walletConnectIcon from "../../assets/images/connectors/walletConnectIcon.svg";
import Select from "react-select";
import Menu, { MenuProps } from "@mui/material/Menu";
import { styled, alpha } from "@mui/material/styles";
import Eth from "../../assets/images/others/ethsmall.png";
import Bin from "../../assets/images/others/binancesmall.png";
import Poly from "../../assets/images/others/polygonsmall.png";
import Udfarm from "../../assets/images/others/udfarm.png";

export default function MiniDrawer(props) {
  const [NetworkValue, setNetworkValue] = useState("Network");
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [MyModal, setMyModal] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const open1 = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  const [anchorEl3, setAnchorEl3] = React.useState<null | HTMLElement>(null);
  const open3 = Boolean(anchorEl3);

  const StyledMenu = styled((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 10,
      marginTop: theme.spacing(1),
      maxWidth: 151,
      maxHeight: 184,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));

  const StyledMenu1 = styled((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 10,
      marginTop: theme.spacing(1),
      minWidth: "303px",
      minHeight: "361px",
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClick3 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleEth = () => {
    setNetworkValue("Ether");
    setAnchorEl(null);
  };

  const handleBin = () => {
    setNetworkValue("Bin");
    setAnchorEl(null);
  };

  const handlePoly = () => {
    setNetworkValue("Poly");
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  const options = [
    { value: "Ethereum", label: "Ethereum" },
    { value: "Binance", label: "Binance" },
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        classes={{ colorPrimary: classes.AppBarBg }}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            {open ? (
              <IconButton>
                <MenuOpenIcon
                  style={{ color: "black" }}
                  onClick={() => setOpen(false)}
                />
              </IconButton>
            ) : (
              <IconButton>
                <MenuIcon
                  style={{ color: "black" }}
                  onClick={() => setOpen(true)}
                />
              </IconButton>
            )}
          </div>
          <div>
            <IconButton>
              <img src={Nofification} />
            </IconButton>
            <Button className={classes.HeaderBtn} onClick={handleClick3}>
              13.4622
            </Button>
            <StyledMenu1
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl3}
              open={open3}
              onClose={handleClose3}
            >
              <img
                src={Udfarm}
                width="44px"
                height="47px"
                style={{ position: "absolute", top: "21px", left: "130px" }}
              />
              <div
                style={{
                  width: "215px",
                  height: "23px",
                  position: "absolute",
                  left: "44px",
                  top: "80px",
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "20px",
                  lineHeight: "24px",
                  textAlign: "center",
                }}
              >
                Ufarm Price:$0.04
              </div>
              <div
                style={{ position: "absolute", top: "119px", color: "black" }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Divider />
              </div>
            </StyledMenu1>
            <Button
              className={classes.HeaderBtn}
              onClick={() => setMyModal(true)}
            >
              Connect Wallet
            </Button>

            <Button
              id="demo-customized-button"
              aria-controls="demo-customized-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              style={{
                backgroundColor: "white",
                border: "1px solid #A9A9A9",
                borderRadius: "10px",
                marginLeft: "0.5rem",
              }}
            >
              {NetworkValue === "Ether" ? (
                <div>
                  {" "}
                  <img src={Eth} /> Ethereum{" "}
                </div>
              ) : NetworkValue === "Bin" ? (
                <div>
                  <img src={Bin} /> Binance
                </div>
              ) : NetworkValue === "Poly" ? (
                <div>
                  <img src={Poly} /> <span> Polygon </span>
                </div>
              ) : (
                "Network"
              )}
            </Button>

            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open1}
              onClose={handleClose}
            >
              <MenuItem onClick={handleEth}>
                <img src={Eth} height="22" width="22" />
                &nbsp;&nbsp;Ethereum
              </MenuItem>
              <MenuItem onClick={handleBin}>
                <img src={Bin} height="22" width="22" />
                &nbsp;&nbsp;Binance
              </MenuItem>
              <MenuItem onClick={handlePoly}>
                <img src={Poly} height="22" width="22" />
                &nbsp;&nbsp;Polygon
              </MenuItem>
            </StyledMenu>

            <IconButton style={{ marginLeft: "0.5rem" }} onClick={handleClick2}>
              <img src={Setting} />
            </IconButton>

            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl2}
              open={open2}
              onClose={handleClose2}
              style={{
                maxWidth: "300px !important",
                minHeight: "208px !important",
              }}
            >
              <div
                style={{
                  width: "224px",
                  height: "23px",
                  fontFamily: "DM Sans",
                  fontWeight: "bold",
                  fontStyle: "normal",
                  fontSize: "18px",
                  lineHeight: "23px",
                  marginBottom: "10px",
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Settings
              </div>
              <MenuItem
                onClick={handleClose2}
                style={{
                  left: "-10px",
                  marginBottom: "10px",
                  marginLeft: "1px",
                }}
              >
                Whats New
              </MenuItem>
              <MenuItem
                onClick={handleClose2}
                style={{
                  left: "-10px",
                  marginLeft: "1px",
                  marginBottom: "10px",
                }}
              >
                Request a Feature
              </MenuItem>
            </StyledMenu>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <Sidebar open={open} />
      </Drawer>

      <Container className={classes.content} maxWidth="lg">
        <div className={classes.toolbar} />
        {props.children}
      </Container>
      <Modal
        open={MyModal}
        title="Select Wallet"
        class="ConnectDilog"
        headerClass="myHeaderClass"
        close={() => setMyModal(false)}
      >
        {/* <ListItme1
          name="MetaMask"
          image={MetaMask}
          Connect={Connect}
          Click={() => setConnect(true)}
        /> */}
        <div style={{ display: "flex", flexFlow: "wrap" }}>
          <Wallet image={MetaMask} imageWidth={45} name="MetaMask" />
          <Wallet
            image={walletConnectIcon}
            imageWidth={45}
            name="Wallet Connect"
          />
        </div>
      </Modal>
    </div>
  );
}
