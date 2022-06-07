import React from "react";
import styled from "styled-components";
import THT from "../../../assets/Tokens/THT.png";
import ETH from "../../../assets/Tokens/ETH.png";

const PoolText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
`;
const TokenText = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  margin-left: 20px;
`;

const Position = () => {
  return (
    <div>
      <div style={{ marginTop: "20px", padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <PoolText>Your Position</PoolText>
          <PoolText>0.665651548451544</PoolText>
        </div>
      </div>
      <div
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "30px",
          paddingTop: "20px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <PoolText>0.01545154%</PoolText>
            <div style={{ marginTop: "5px" }}>Your Pool Share</div>
          </div>
          <div>
            <PoolText>5.35545451848</PoolText>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={THT}
                alt="THT"
                style={{ width: "31px", height: "31px", marginTop: "5px" }}
              />
              <TokenText>USDT</TokenText>
            </div>
          </div>
          <div>
            <PoolText>5.35545451848</PoolText>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={ETH}
                alt="ETH"
                style={{ width: "31px", height: "31px", marginTop: "5px" }}
              />
              <TokenText>ETH</TokenText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Position;
