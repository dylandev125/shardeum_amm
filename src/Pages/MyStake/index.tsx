import Card from "../Component/Card";
import { Button } from "@material-ui/core";
import Eth from "../../assets/images/others/eth.svg";
import Bnb from "../../assets/images/others/bn.svg";
import Poly from "../../assets/images/others/polygon.svg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import Paper from "@mui/material/Paper";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Skeleton from '@material-ui/lab/Skeleton';
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import InfoIcon from "@material-ui/icons/Info";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4),
  borderRadius: 10,
  textAlign: "center",
  color: theme.palette.text.secondary,
  display: "flex",
  justifyContent: "space-between",
  boxShadow: '0 0 0.5px rgba(6, 10, 13, 0.4), 0 8px 16px rgba(113, 121, 128, 0.08)'
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
const MyStake = () => {
  const history = useHistory()
  const classes = useStyles()
  const [loading, setLofding] = useState(false)
  return (
    <div>
      <Grid container spacing={2} style={{marginTop:'1rem'}}>
        <Grid item xs={12} >
          <Item >
            <div style={{ display: 'flex' }}>
              <div>
                <img src={Eth} style={{ width: 40, marginRight: '1rem' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span style={{ fontSize: 17, color: 'black' }}>Defi Pluse Index Token</span>
                <span>Cohort 24</span>
              </div>

            </div>
            <div className={classes.mainDiv}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ fontSize: 12, color: 'black', }}>TVL </span>
                <InfoIcon
                  style={{
                    fontSize: "12px",
                    marginLeft: "0.5rem",
                    color: "#C4C4C4",
                  }}
                />
              </div>
              <span style={{ fontSize: 15, color: "black", marginTop: '0.3rem' }}>$20,000,000</span>
            </div>
            <div className={classes.mainDiv}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {" "}
                <span style={{ fontSize: 12, color: 'black', }}>APY Range</span>
                <InfoIcon
                  style={{
                    fontSize: "12px",
                    marginLeft: "0.5rem",
                    color: "#C4C4C4",
                  }}
                />
              </div>
              <span style={{ fontSize: 15, color: "black",marginTop: '0.3rem' }}>34%-150%</span>
            </div>

            <div className={classes.mainDiv}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {" "}
                <span style={{ fontSize: 12, color: 'black', }}>Poo Fill</span>
                <InfoIcon
                  style={{
                    fontSize: "12px",
                    marginLeft: "0.5rem",
                    color: "#C4C4C4",
                  }}
                />
              </div>
              <div style={{ width: 30, height: 30,marginTop: "0.3rem" }}>
                <CircularProgressbar
                  value={66}
                  styles={buildStyles({
                    pathColor: "#45DA54",
                    textColor: "#f88",
                    trailColor: "#d6d6d6",
                    backgroundColor: "#3e98c7",
                  })}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                  }}
                >
                  <span style={{ color: "grey",marginTop: '0.3rem' }}>100+</span>
                  <PersonOutlineIcon style={{ fontSize: 20, color: "grey",marginTop: '0.3rem'}} />
                </div>
              </div>
            </div>
            <div className={classes.mainDiv}>
              <div style={{ display: "flex", alignItems: "center" }}>
                
                <span style={{ fontSize: 12, color: 'black', marginBottom: '0.3rem' }}>Rewards</span>
                <div style={{ background: "#FEDEDE", width: "70%", marginLeft: '1rem' ,marginBottom: '0.3rem', borderRadius:5}}>
                  <span style={{ marginRight: "0.3rem" }}>179D</span>
                  <span style={{ marginRight: "0.3rem" }}>23H</span>
                  <span>59M</span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  flexDirection: "column",

                }}

              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div>
                    <div>
                      <img src={Eth} style={{ width: 20 }} />
                    </div>
                    <span>ETH</span>
                  </div>
                  <div>
                    <div>
                      <img src={Bnb} style={{ width: 20 }} />
                    </div>
                    <span>BNB</span>
                  </div>
                  <div>
                    <div>
                      <img src={Poly} style={{ width: 20 }} />
                    </div>
                    <span>MATIC</span>
                  </div>
                  <div>+7</div>
                </div>

              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Button
                style={{
                  background: "#6338BC",
                  color: "white",
                  borderRadius: 10,
                  padding: '6px 12px'
                }}
                onClick={() => history.push("/pools")}
              >
                {" "}
                View Detail
              </Button>
            </div>
          </Item>
        </Grid>
      </Grid>
      {/* <Card>
              <div style={{position:'relative'}}>
                <div style={{display:'flex',fontWeight:'bold'}}>
                  <div style={{width:180,textAlign:'left',marginBottom:'1rem'}}>Token Name</div>
                  <div style={{width:180,textAlign:'left'}}>Current APY</div>
                  <div style={{width:180,textAlign:'left'}}>TVL</div>
                  <div style={{width:180,textAlign:'left'}}>Pool Fill</div>
                 
                  <div style={{width:180,textAlign:'left'}}>Reward</div>
                  <div style={{width:180,textAlign:'left'}}></div>
                </div>
                <div style={{display:'flex'}}>
                  <div style={{width:180 ,textAlign:'left'}}>
                    DeFI Pulse Index Token
                    <br />
                    <span style={{ color: "grey" }}>Cohort 24</span>
                  </div>
                  <div style={{width:180,textAlign:'left'}}>1500%</div>
                   <div style={{width:180 ,textAlign:'left'}}>$20,000,000</div>
                   <div style={{width:180,textAlign:'left'}}>
                  <div style={{ width: 40, height: 40 }}>
                    <CircularProgressbar
                      value={66}
                      styles={buildStyles({
                        pathColor: "#45DA54",
                        textColor: "#f88",
                        trailColor: "#d6d6d6",
                        backgroundColor: "#3e98c7",
                      })}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "left",
                    }}
                  >
                    <span style={{ color: "grey" }}>100+</span>
                    <PersonOutlineIcon style={{ fontSize: 20, color: "grey" }} />
                  </div>
                </div>
                <div  style={{width:180}}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "15%",
                    flexDirection: "column",
                    
                  }}
                
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <div>
                      <div>
                        <img src={Eth} style={{ width: 20 }} />
                      </div>
                      <span>ETH</span>
                    </div>
                    <div>
                      <div>
                        <img src={Bnb} style={{ width: 20 }} />
                      </div>
                      <span>BNB</span>
                    </div>
                    <div>
                      <div>
                        <img src={Poly} style={{ width: 20 }} />
                      </div>
                      <span>MATIC</span>
                    </div>
                    <div>+7</div>
                  </div>
                  <div style={{ background: "#FEDEDE", width: "70%" }}>
                    <span style={{ marginRight: "0.3rem" }}>179D</span>
                    <span style={{ marginRight: "0.3rem" }}>23H</span>
                    <span>59M</span>
                  </div>
                </div>
                </div>
                <div style={{width:180,textAlign:'left'}}>
                <Button
                    style={{
                      background: "#6338BC",
                      color: "white",
                      borderRadius: 10,
                      padding: '6px 12px'
                    }}
                    onClick={() => history.push("/pools")}
                  >
                    {" "}
                    Stake Now
                  </Button>
                </div>
               
               </div>
              
              </div>
          
        
            </Card> */}



    </div>
  );
};

export default MyStake;
