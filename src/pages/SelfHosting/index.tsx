import React from "react";
import styled from "styled-components";
import Token from "../../components/Token";
import InfoItem from "../../components/SelfHosting/InfoItem";
import Swap from "../../components/Swap";

const SelfHostingContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
  margin-top: 50px;
  margin-left: -24px;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    padding: 20px 10px;
    margin-bottom: 30px;
  }
`;
const InfoWrapper = styled.div`
  flex: 0.6;
  @media (max-width: 900px) {
    flex: 1;
    width: 100%;
  }
`;
const PurchaseWrapper = styled.div`
  flex: 0.4;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 900px) {
    width: 75%;
    margin: 20px auto;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
const InfoItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0px;
  width: 100%;
  position: relative;
`;
const AboutCont = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
`;
const Title = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 10px;
`;
const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #616161;
  text-align: left;
`;
const ScheduleCont = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
`;

const Link = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: left;
  color: #a80084;
  text-decoration: none;
`;
const StyledDivider = styled.div`
  display: none;
  @media (max-width: 540px) {
    display: block;
    height: 350px;
    width: 1px;
    background-color: #e0e0e0;
    position: absolute;
    z-index: 3;
    left: 50%;
  }
`;
function SelfHosting() {
  return (
    <SelfHostingContainer>
      <InfoWrapper>
        <Token />
        <InfoItems>
          <StyledDivider />
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
          <Title>About Tether </Title>
          <Text>
            USDT is a stablecoin (stable-value cryptocurrency) that mirrors the
            price of the U.S. dollar, issued by a Hong Kong-based company
            Tether. The token’s peg to the USD is achieved via maintaining a sum
            of commercial paper, fiduciary deposits, cash, reserve repo notes
          </Text>
        </AboutCont>
        <ScheduleCont>
          <Title>About UniFarm</Title>
          <Text>
            {` UniFarm is a decentralized farming solution where users can earn upto 250% APY and can farm multiple tokens by staking just one token. UniFarm also offers services like AMM, cross-chain bridge and an IDO Launchpad as part of its Start-up Suite. To know more about UniFarm,`}
            <br />
            <Link href="#">click here</Link>
          </Text>
        </ScheduleCont>
      </InfoWrapper>
      <PurchaseWrapper>
        <Swap />
      </PurchaseWrapper>
    </SelfHostingContainer>
  );
}
export default SelfHosting;
