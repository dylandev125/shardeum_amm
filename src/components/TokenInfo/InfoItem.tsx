import React from "react";
import styled from "styled-components";
import Trend from "./Trend";

interface InfoItemProps {
  title: string;
  amount: string;
  trend: number;
  up: boolean;
  id: number;
}

const ItemTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  font-family: "Inter";
  font-style: normal;
  color: #212121;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;
const ItemAmount = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  font-family: "Inter";
  font-style: normal;
  color: #212121;
  @media only screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

export default function InfoItem({
  title,
  amount,
  trend,
  up,
  id,
}: InfoItemProps) {
  const InfoItemCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    height: 140px;
    padding: 20px;
    max-width: 30%;
    flex: 25%;
    border-top: ${id === 4 || id === 5 || id === 6
      ? "1px solid #E0E0E0"
      : "none"};
    border-right: ${id === 3 || id === 6 ? "none" : "1px solid #E0E0E0"};
    @media only screen and (max-width: 600px) {
      max-width: 90%;
      width: 90%;
      border: none;
      border-bottom: ${id < 5 ? "1px solid #E0E0E0" : "none"};
      height: 80px;
      align-items: start;
      gap: 5px;
      padding: 10px;
    }
  `;

  return (
    <InfoItemCont>
      <ItemTitle>{title}</ItemTitle>
      <ItemAmount> {amount} </ItemAmount>
      <Trend up={up} trend={trend} />
    </InfoItemCont>
  );
}
