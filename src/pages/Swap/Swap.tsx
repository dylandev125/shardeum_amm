import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";

import TokenInfo from "../../components/TokenInfo";
import InfoItem from "../../components/TokenInfo/InfoItem";
import AboutInfo from "../../components/AboutInfo";
import SwapModal from "../../components/SwapModal";
import SwapInfo from "../../components/SwapModal/SwapInfo";

import ethImg from "../../assets/Tokens/ETH.png";
import polygonImg from "../../assets/Tokens/BTC.png";

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

const Swap = () => {
  return (
    <>
      <RootWrapper>
        <Grid container>
          <Grid item lg={6} xs={12}>
            <InfoWrapper>
              <TokenInfo />
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
              <AboutInfo />
            </InfoWrapper>
          </Grid>
          <Grid item lg={6} xs={12}>
            <PurchaseWrapper>
              <SwapModal />
              <SwapInfo
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
    </>
  );
};

export default Swap;
