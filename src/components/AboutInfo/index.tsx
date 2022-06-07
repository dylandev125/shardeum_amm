import React from "react";
import styled from "styled-components";

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

const index = () => {
  return (
    <>
      <AboutCont>
        <Title>About Tether</Title>
        <Text>
          USDT is a stablecoin (stable-value cryptocurrency) that mirrors the
          price of the U.S. dollar, issued by a Hong Kong-based company Tether.
          The token’s peg to the USD is achieved via maintaining a sum of
          commercial paper, fiduciary deposits, cash, reserve repo notes
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
    </>
  );
};

export default index;
