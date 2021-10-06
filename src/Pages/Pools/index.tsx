import * as React from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Bnb from "../../assets/images/others/eth.svg";
import Grid from "@mui/material/Grid";
import { Button, IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import InfoIcon from "@material-ui/icons/Info";
import { useHistory } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4),
  borderRadius: 10,
  textAlign: "center",
  color: theme.palette.text.secondary,
  display: "flex",
  justifyContent: "space-between",
  boxShadow:'0 0 0.5px rgba(6, 10, 13, 0.4), 0 8px 16px rgba(113, 121, 128, 0.08)'
}));

const Item2 = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  borderRadius: 10,
  textAlign: "center",
  color: theme.palette.text.secondary,
  display: "flex",
  justifyContent: "space-between",
  boxShadow:'0 0 0.5px rgba(6, 10, 13, 0.4), 0 8px 16px rgba(113, 121, 128, 0.08)'

}));
const useStyles = makeStyles((theme) => ({
  mainDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  imageDiv: {
    width: 117,
    marginTop: "1rem",
  },
}));
const pools = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div style={{ display: "flex",marginTop:'-1.5rem' }}>
        <IconButton onClick={() => history.push("/farm")}>
          <ArrowBackIosIcon style={{fontSize:18,color:'black'}} />
        </IconButton>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "2rem",
          marginTop: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            <img src={Bnb} style={{ width: 30 }} />
            <span style={{ marginLeft: "0.5rem" }}>Defi Pluse Index</span>
          </div>
          <span style={{ marginLeft: "2.3rem" }}>Cohort 12</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "1.5rem",
            alignItems: "flex-start",
          }}
        >
          <span>Current APY</span>
          <span style={{ fontSize: "18px", fontWeight: 600 }}>1500%</span>
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <Item >
            <div className={classes.mainDiv}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span>TVL </span>
                <InfoIcon
                  style={{
                    fontSize: "15px",
                    marginLeft: "0.5rem",
                    color: "#C4C4C4",
                  }}
                />
              </div>
              <span style={{ fontSize: 18, color: "black" }}>$20,000,000</span>
            </div>
            <div className={classes.mainDiv}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {" "}
                <span>APY Range</span>
                <InfoIcon
                  style={{
                    fontSize: "15px",
                    marginLeft: "0.5rem",
                    color: "#C4C4C4",
                  }}
                />
              </div>
              <span style={{ fontSize: 18, color: "black" }}>34%-150%</span>
            </div>
            <div className={classes.mainDiv}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {" "}
                <span>Lock In</span>
                <InfoIcon
                  style={{
                    fontSize: "15px",
                    marginLeft: "0.5rem",
                    color: "#C4C4C4",
                  }}
                />
              </div>
              <span style={{ fontSize: 18, color: "black" }}>Locked</span>
            </div>
            <div className={classes.mainDiv}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {" "}
                <span>Rewards Ends in</span>
                <InfoIcon
                  style={{
                    fontSize: "15px",
                    marginLeft: "0.5rem",
                    color: "#C4C4C4",
                  }}
                />
              </div>
              <span style={{ fontSize: 18 }}>179D 23H 59M</span>
            </div>
          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item>
            <div style={{ width: "100%" }}>
              <span
                style={{
                  display: "flex",
                  fontSize: 25,
                  
                  marginTop: "-1rem",
                  marginBottom: "1rem",
                  textDecoration: "underline",
                }}
              >
                Stake
              </span>
              <div
                style={{
                  background: "#FAFAFA",
                  width: "100%",
                  textAlign: "left",
                  marginLeft: "-0.5rem",
                  padding: "1rem",
                  borderRadius: "10px",
                }}
              >
                <span>Staked Balanced</span>
                <span style={{ marginLeft: "3rem" }}>
                  <b>0</b>
                </span>
              </div>
              <a
                href="#"
                style={{
                  color: "grey",
                  textAlign: "right",
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "0.5rem",
                }}
              >
                Balance : 518454.54545 (-$32020)
              </a>
              <div
                style={{ display: "flex", width: "100%", marginTop: "1rem" }}
              >
                <div
                  style={{
                    background: "#CCCCCC",
                    padding: 3,
                    width: "50px",
                    borderRadius: "10px 1px 1px 10px",
                  }}
                >
                  <img src={Bnb} style={{ width: 25, marginTop: 5 }} />
                </div>
                <input type="text" 
                style={{ width: "100%",borderLeft:0,borderRight:'1px solid',borderTop:'1px solid',borderBottom:'1px solid',borderRadius:'0px 10px 10px 0px',borderColor:'grey' }} />
              </div>
              <a
                href="#"
                style={{
                  color: "grey",
                  textAlign: "right",
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: "0.5rem",
                }}
              >
                Max staking avaliable: 25680.0540
              </a>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1rem",
                }}
              >
                <Button
                  style={{
                    background: "#6338BC",
                    color: "white",
                    marginBottom: "1rem",
                    marginTop: "1rem",
                    borderRadius: "10px",
                  }}
                >
                  Allow UniFarm to use your Token
                </Button>
                <Button
                  style={{
                    background: "#CCCCCC",
                    color: "black",
                    borderRadius: "10px",
                  }}
                >
                  Stake
                </Button>
              </div>
            </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item2 style={{ height: "100%" }}>
            <div style={{ width: "100%",marginTop:'0.8rem' }}>
              <span
                style={{ display: "flex", fontSize: 16, marginLeft: "1rem" }}
              >
                Expected Reward
              </span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  width: "100%",
                  flexFlow: "wrap",
                }}
              >
                <div className={classes.imageDiv}>
                  <div>
                    <img src={Bnb} style={{ width: 25 }} />
                  </div>
                  <span>50000.12345</span>
                </div>
                <div className={classes.imageDiv}>
                  <div>
                    <img src={Bnb} style={{ width: 25 }} />
                  </div>
                  <span>50000.12345</span>
                </div>
                <div className={classes.imageDiv}>
                  <div>
                    <img src={Bnb} style={{ width: 25 }} />
                  </div>
                  <span>50000.12345</span>
                </div>
                <div className={classes.imageDiv}>
                  <div>
                    <img src={Bnb} style={{ width: 25 }} />
                  </div>
                  <span>50000.12345</span>
                </div>
                <div className={classes.imageDiv}>
                  <div>
                    <img src={Bnb} style={{ width: 25 }} />
                  </div>
                  <span>50000.12345</span>
                </div>
                <div className={classes.imageDiv}>
                  <div>
                    <img src={Bnb} style={{ width: 25 }} />
                  </div>
                  <span>50000.12345</span>
                </div>
              </div>
            </div>
          </Item2>
        </Grid>
      </Grid>
    </Box>
  );
};
export default pools;
