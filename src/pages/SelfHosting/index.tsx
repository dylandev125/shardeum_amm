import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Swap from "../../components/Swap";
import Token from "../../components/Token";
import Wrapper from "../../components/Swap/Wrapper";
import InfoItem from "../../components/SelfHosting/InfoItem";
import ethImg from "../../assets/images/eth.svg";
import polygonImg from "../../assets/images/polygon.svg";

const RootWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const InfoItems = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: start;
    margin-top: 20px;
  }
`;
const PurchaseWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    margin-top: 20px;
  }
`;
const AboutCont = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 30px;
  padding-right: 130px;
  @media only screen and (max-width: 600px) {
    margin-top: 20px;
    padding-right: 0px;
  }
`;
const Title = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 10px;
  @media only screen and (max-width: 600px) {
    font-size: 18px;
  }
`;
const Text = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #616161;
  text-align: left;
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;
const Link = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: left;
  color: #000000;
  text-decoration: none;
`;

function SelfHosting() {
  return (
    <RootWrapper>
      <Grid container>
        <Grid item lg={6} xs={12}>
          <InfoWrapper>
            <Token />
            <InfoItems>
              <InfoItem
                id={1}
                title="Market Cap"
                amount="$414.65B USD"
                up
                trend={5.66}
              />
              <InfoItem
                id={2}
                title="Max Supply"
                amount="1117,878,943 "
                up={false}
                trend={2.06}
              />
              <InfoItem
                id={3}
                title="Circulating Supply"
                amount="1117,878,943 "
                up
                trend={4.77}
              />
              <InfoItem
                id={4}
                title="All-Time High"
                amount="$1.1 USD"
                up={false}
                trend={20.33}
              />
              <InfoItem
                id={5}
                title="24h Volume"
                amount="$18.82B USD"
                up
                trend={12.19}
              />
              <InfoItem
                id={6}
                title="Network"
                amount="Ethereum"
                up={false}
                trend={12.19}
              />
            </InfoItems>
            <AboutCont>
              <Title>About Tether</Title>
              <Text>
                USDT is a stablecoin (stable-value cryptocurrency) that mirrors
                the price of the U.S. dollar, issued by a Hong Kong-based
                company Tether. The token’s peg to the USD is achieved via
                maintaining a sum of commercial paper, fiduciary deposits, cash,
                reserve repo notes
              </Text>
            </AboutCont>
            <AboutCont>
              <Title>About UniFarm</Title>
              <Text>
                {` UniFarm is a decentralized farming solution where users can earn upto 250% APY and can farm multiple tokens by staking just one token. UniFarm also offers services like AMM, cross-chain bridge and an IDO Launchpad as part of its Start-up Suite. To know more about UniFarm,`}
                <br />
                <Link href="#">click here</Link>
              </Text>
            </AboutCont>
          </InfoWrapper>
        </Grid>
        <Grid item lg={6} xs={12}>
          <PurchaseWrapper>
            <Swap />
            <Wrapper
              Recieved="38.72 Matic"
              Price="0.25%"
              Network="$120.00"
              Exchange="38.72 Matic"
              Save="$1.97"
              Route={[
                { icon: ethImg, name: "Eth" },
                { icon: polygonImg, name: "Bitcoin" },
              ]}
            />
          </PurchaseWrapper>
        </Grid>
      </Grid>
    </RootWrapper>
  );
}
export default SelfHosting;
