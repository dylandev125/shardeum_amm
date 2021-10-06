import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Button, Collapse, Divider } from "@material-ui/core";
import Logo from "../../assets/images/others/logo1.png";
import { MyTheme, ButtonBg } from "../../../src/stylevariable";
import React, { useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";
import PlusThree from "../../assets/images/others/plusthree.png";
import Ether from "../../assets/images/others/ether.png";
import BNC from "../../assets/images/others/bnc.png";
import Matic from "../../assets/images/others/matic.png";
import { useHistory } from "react-router-dom";
import Skeleton from '@material-ui/lab/Skeleton';
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: "25px",
    width: "323px",
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: "#CFCFCF",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#53D746",
  },
}))(LinearProgress);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    progressLabel: {
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: 1,
      left: "130px",
      maxHeight: "75px", // borderlinearprogress root.height
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      "& span": {
        width: "100%",
      },
      color: "#000000",
    },
    tokenName: {
      width: "115px",
      height: "50px",
      position: "absolute",
      top: "15px",
      left: "44.9px",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "18px",
      lineHeight: "25px",
      color: "#1A1A1A",
    },
    apyText: {
      width: "105px",
      height: "22px",
      position: "absolute",
      top: "15px",
      right: "20px",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "18px",
      lineHeight: "22px",
      color: "#000000",
    },
    apyPercent: {
      position: "absolute",
      height: "19px",
      width: "73px",
      top: "40px",
      right: "20px",
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "23px",
      textAlign: "right",
      color: "#9272EC",
    },
    cohortName: {
      position: "absolute",
      width: "78px",
      height: "22px",
      top: "70px",
      left: "45px",
      color: "#A4A4A4",
      backgroundColor: "#FEF7F7",
    },
    rewardName: {
      position: "absolute",
      width: "66px",
      height: "19px",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "19px",
      top: "110px",
      left: "18px",
    },
    dayDateTime: {
      position: "absolute",
      top: "108px",
      right: "20px",
      width: "112px",
      height: "18px",
      backgroundColor: "#FEDEDE",
      color: "#5A5858",
    },
    tvlName: {
      position: "absolute",
      width: "31px",
      height: "19px",
      top: "238px",
      left: "19px",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#000000",
    },
    tvlValue: {
      position: "absolute",
      width: "98px",
      height: "19px",
      top: "238px",
      right: "20px",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "19px",
      textAlign: "right",
      color: "#000000",
    },
    apyName: {
      position: "absolute",
      width: "84px",
      height: "19px",
      top: "286px",
      left: "17px",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#000000",
    },
    apyValue: {
      position: "absolute",
      top: "286px",
      right: "20px",
      width: "81px",
      height: "19px",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "19px",
      textAlign: "right",
      color: "#000000",
    },
    paper: {
      padding: theme.spacing(0.5),
      textAlign: "center",
      color: theme.palette.text.secondary,
      width: "361px !important",
      height: "445px !important",
      position: "absolute",
      left: "245px",
      top: "253px",
      marginLeft: "1.1rem",
      borderRadius: "10px",
      border: "1px solid #E1E1E1",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        marginTop: "0rem !important",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        marginTop: "2rem",
      },
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginTop: "2rem",
      },
    },
    TextField: {
      width: "326px",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
      "&>.MuiOutlinedInput-root": {
        borderRadius: "8px 1px 1px 8px",
      },
    },
    inputmyDiv: {
      [theme.breakpoints.down("xs")]: {
        display: "flex",
      },
    },
    inputmyDiv1: {
      [theme.breakpoints.down("xs")]: {
        display: "flex",
      },
      marginLeft: 80,
      fontFamily: "Kanit",
      fontWeight: 400,
      position: "relative",
      top: -20,
    },
    MaxBtn: {
      background: ButtonBg.myBackground,
      color: "white",
      height: "39px",
      borderRadius: "0px 8px 6px 1px",
      "&:hover": {
        background: ButtonBg.myBackground,
      },
    },
    ApproveBtn: {
      background: ButtonBg.myBackground,
      color: "white",
      height: "39px",
      width: "50%",
      marginTop: "1.5rem",
      marginBottom: "1rem",
      borderRadius: 20,
      [theme.breakpoints.down("xs")]: {
        fontSize: 11,
      },
      "&:hover": {
        background: ButtonBg.myBackground,
      },
    },
    APYWatcher: {
      display: "flex",
      marginLeft: "14rem",
      marginTop: "-4rem",
    },
    ApproveBtnLast: {
      background: ButtonBg.myBackground,
      color: "white",
      height: "33px",
      width: "36%",
      marginTop: "1rem",
      marginBottom: "1rem",
      borderRadius: 20,
      [theme.breakpoints.down("xs")]: {
        fontSize: 11,
      },
      "&:hover": {
        background: ButtonBg.myBackground,
      },
    },
    ApproveBtn2: {
      background: "green",
      color: "white",
      height: "39px",
      width: "33%",
      marginTop: "1.5rem",
      marginBottom: "1rem",
      borderRadius: 20,
      "&:hover": {
        background: "green",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 11,
      },
    },
    ConfirmBtn: {
      background: ButtonBg.myBackground,
      color: "white",
      height: "39px",
      width: "33%",
      marginTop: "1.5rem",
      marginBottom: "1rem",
      borderRadius: 20,
      [theme.breakpoints.down("xs")]: {
        fontSize: 11,
      },
      "&:hover": {
        background: ButtonBg.myBackground,
      },
    },
    Progress: {
      width: "70px !important",
      "&>svg": {
        width: 71,
      },
      "&>.indicator": {
        display: "flex",
        height: "100%",
        justifyContent: " center",
        margin: " 0 auto",
        position: "absolute",
        top: "-4px",
        left: 3,
        width: "100%",
        alignItems: "center",
        color: "black !important",
        fontSize: "15px",
        fontWeight: "500",
      },
    },
    collapseInnerDiv3List: {
      display: "flex",
      flexDirection: "column",
      width: 80,
      alignItems: "center",
      fontSize: "11px",
      fontWeight: "bold",
      color: "black",
      [theme.breakpoints.down("xs")]: {
        width: 73,
      },
      [theme.breakpoints.between("xs", "sm")]: {
        width: "79px !important",
      },
      [theme.breakpoints.down("md")]: {
        width: 71,
      },
    },
    listImage: {
      borderRadius: 29,
      boxShadow: "rgb(0 0 0 / 25%) 0px 3.45867px 8px",
      height: 40,
      width: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "0.3rem",
    },
    listText: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 9,
      color: "black",
      fontWeight: 500,
    },
    headerDiv: {
      display: "flex",
      justifyContent: "space-between",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      alignItems: "center",
      height: "87px",
      color: "black !important",
      overflow: "hidden",
    },
    collapsdiv: {
      padding: 10,
      border: "1px solid rgba(50, 120, 255, 1)",
      marginRight: "1.5rem",
      marginLeft: "1rem",
      marginTop: "0.5rem",
      borderRadius: 10,
      color: "black",
    },
    HeaderText: {
      display: "flex",
      justifyContent: "space-between",
      color: "black",
      marginLeft: "13rem",
      marginRight: "1rem",
      marginTop: "-2rem",
      fontFamily: "Inter",
    },
    Divider: {
      position: "absolute",
      width: "361px",
      top: "97px",
      border: "1px solid #DADADA",
      left: "0px",
      marginTop: "-0.5rem",
      marginBottom: "0.8rem",
    },
    ListReward: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-start",
    },
    collapsDetail: {
      display: "flex",
      justifyContent: "space-between",
    },
    collapsText: {
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
      fontWeight: "bold",
    },
    ActionDiv: {
      display: "flex",
      justifyContent: "space-between",
      marginLeft: "1rem",
      marginRight: "1rem",
      marginTop: "1rem",
      marginBottom: "1rem",
    },
    StakeBtn: {
      width: "323px",
      height: "40px",
      background: "#9272EC",
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "18px",
      lineHeight: "23px",
      textAlign: "center",
      color: "white",
      position: "absolute",
      top: "386px",
      left: "18px",
      "&:hover": {
        background: "#9272EC",
      },
      [theme.breakpoints.down("sm")]: {
        width: "140px !important",
      },
      [theme.breakpoints.down("md")]: {
        width: 120,
      },
    },
    DetailBtn: {
      width: 130,
      background: "transparent",
      border: "1px solid " + ButtonBg.myBackground + "",
      color: "black !important",
      [theme.breakpoints.down("sm")]: {
        width: "140px !important",
      },
      [theme.breakpoints.down("md")]: {
        width: 120,
      },
    },
    spanHeight: {
      height: 25,
    },
  })
);

const Gride = () => {
  const history=useHistory()
  const classes = useStyles();
  const [List, setList] = useState([
    {
      image: Logo,
      text1: "Argo",
    },
    {
      image: Logo,
      text1: "Argo",
    },
    {
      image: Logo,
      text1: "Argo",
    },
  ]);
 
  return (
    <div>
     
    <Paper className={classes.paper}>
      <div className={classes.headerDiv}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={Logo}
            width="17.41px"
            height="18.45px"
            style={{
              position: "absolute",
              top: "15.63px",
              left: "18.59px",
            }}
          />
          <div className={classes.tokenName}>Oro Token</div>
          <div className={classes.apyText}>Current APY</div>
          <div className={classes.apyPercent}>34 %</div>
          <div className={classes.cohortName}>Cohort 21</div>
        </div>
      </div>
      <Divider className={classes.Divider} />
      <div
        style={{
          textAlign: "left",
          marginLeft: "1rem",
          color: "black",
          marginBottom: "50px",
        }}
      >
        <div className={classes.rewardName}>Rewards</div>
        <div className={classes.dayDateTime}>
          179D&nbsp;&nbsp;23H&nbsp;&nbsp;59M
        </div>
      </div>
      <div className={classes.ListReward}>
        <img
          src={Ether}
          width="38px"
          height="38px"
          style={{ position: "absolute", top: "149px", left: "19px" }}
        />
        <div
          style={{
            width: "30px",
            height: "23px",
            position: "absolute",
            top: "192px",
            left: "23px",
            color: "#5A5858",
          }}
        >
          ETH
        </div>
        <img
          src={BNC}
          width="38px"
          height="38px"
          style={{ position: "absolute", top: "149px", left: "96px" }}
        />
        <div
          style={{
            width: "34px",
            height: "23px",
            position: "absolute",
            top: "192px",
            left: "98px",
            color: "#5A5858",
          }}
        >
          BNC
        </div>
        <img
          src={Matic}
          width="58px"
          height="66px"
          style={{ position: "absolute", top: "149px", left: "167px" }}
        />
        <img
          src={PlusThree}
          width="43px"
          height="35px"
          style={{ position: "absolute", top: "153px", right: "58px" }}
        />
      </div>
      <div className="tvl">
        <div className={classes.tvlName}>TVL</div>
        <div className={classes.tvlValue}>$20,000,000</div>
      </div>
      <div className="apy">
        <div className={classes.apyName}>APY Range</div>
        <div className={classes.apyValue}>30%-150%</div>
      </div>
      <Grid container>
        <Grid item>
          <div style={{ position: "absolute", top: "336px", left: "18px" }}>
            <div className={classes.progressLabel}>Pool Filled</div>
            <BorderLinearProgress variant="determinate" value={50} />
          </div>
        </Grid>
      </Grid>
      <div className={classes.ActionDiv}>
        <Button className={classes.StakeBtn} style={{ textTransform: "none" }} onClick={()=>history.push('/pools')}>
          Stake Now
        </Button>
      </div>
    </Paper>
    </div>
  );
};

export default Gride;
