import React from "react";
import styled from "styled-components";
import BNB from "../../assets/Tokens/BNB.png";
import ETH from "../../assets/Tokens/ETH.png";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import RemoveLiquidityModal from "../RemoveLiquidityModal";

interface LiquidityItemDetailsProps {
  display: boolean;
}

const LiquidityItemDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 25px;
  margin: 30px 0;
  cursor: pointer;
  background: #fff;
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.15);
`;
const LiquidityTitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const LiquidityTitleImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 25px;
`;
const LiquidityTitleText = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  font-family: "Inter";
  font-style: normal;
`;
const LiquidityArrowDiv = styled.div`
  width: 55px;
  height: 55px;
  background: #fbf8ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LiquidityItemContentDiv = styled.div<LiquidityItemDetailsProps>`
  ${({ display }) =>
    display &&
    `
    background: #fff;
    padding-bottom: 30px;
    border-radius: 10px;
  `}
`;
const LiquidityDetailsDiv = styled.div<LiquidityItemDetailsProps>`
  padding: 25px 25px;
  cursor: pointer;
  ${({ display }) =>
    display &&
    `
  display: none;
`}
`;
const DetailsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
const DetailsItem = styled.div`
  width: 100%;
`;
const ItemTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #616161;
`;
const ItemValue = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #212121;
  margin-top: 10px;
`;
const DetailButtonsDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 25px;
  margin-top: 40px;
  @media only screen and (max-width: 600px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
const AddButton = styled.div`
  width: 280px;
  height: 55px;
  background: #000000;
  box-shadow: 1px 14px 54px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  line-height: 26px;
  font-family: "Inter";
  font-style: normal;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RemoveButton = styled.div`
  width: 280px;
  height: 55px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  line-height: 26px;
  font-family: "Inter";
  font-style: normal;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Liquidity = () => {
  const [showDetails, setShowDetails] = React.useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = React.useState(false);

  return (
    <div>
      {isRemoveModalOpen ? (
        <RemoveLiquidityModal />
      ) : (
        <>
          <div>
            <LiquidityItemContentDiv display={showDetails}>
              <LiquidityItemDiv onClick={() => setShowDetails(!showDetails)}>
                <LiquidityTitleDiv>
                  <LiquidityTitleImg src={BNB} />
                  <LiquidityTitleImg src={ETH} />
                  <LiquidityTitleText>ETH / USDT</LiquidityTitleText>
                </LiquidityTitleDiv>
                <LiquidityArrowDiv>
                  {showDetails ? (
                    <KeyboardArrowUpIcon
                      style={{
                        width: "25px ",
                        height: "25px",
                        color: "#673AB7",
                      }}
                    />
                  ) : (
                    <KeyboardArrowDownSharpIcon
                      style={{
                        width: "25px ",
                        height: "25px",
                        color: "#673AB7",
                      }}
                    />
                  )}
                </LiquidityArrowDiv>
              </LiquidityItemDiv>
              <LiquidityDetailsDiv display={!showDetails}>
                <DetailsDiv>
                  <DetailsItem>
                    <ItemTitle>Your total MATIC/USDC Pool</ItemTitle>
                    <ItemValue>0.0000001545515</ItemValue>
                  </DetailsItem>
                  <DetailsItem>
                    <ItemTitle>Pooled MATIC</ItemTitle>
                    <ItemValue>5.2954</ItemValue>
                  </DetailsItem>
                  <DetailsItem>
                    <ItemTitle>Pooled USDC</ItemTitle>
                    <ItemValue>5.2954</ItemValue>
                  </DetailsItem>
                  <DetailsItem>
                    <ItemTitle>Your Pool share</ItemTitle>
                    <ItemValue>0.04%</ItemValue>
                  </DetailsItem>
                </DetailsDiv>
                <DetailButtonsDiv>
                  <RemoveButton
                    onClick={() => {
                      setIsRemoveModalOpen(true);
                      setShowDetails(false);
                    }}
                  >
                    Remove
                  </RemoveButton>
                  <AddButton>Add</AddButton>
                </DetailButtonsDiv>
              </LiquidityDetailsDiv>
            </LiquidityItemContentDiv>
          </div>
        </>
      )}
    </div>
  );
};

export default Liquidity;
