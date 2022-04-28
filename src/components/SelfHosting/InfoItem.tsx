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
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  color: #212121;
`;
const ItemAmount = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #212121;
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
    align-items: flex-start;
    justify-content: space-between;
    flex-grow: 1;
    height: 155px;
    padding: 20px;
    max-width: 25%;
    flex: 25%;
    border-top: ${id === 4 || id === 5 || id === 6
      ? "1px solid #E0E0E0"
      : "none"};
    border-right: ${id === 3 || id === 6 ? "none" : "1px solid #E0E0E0"};
    @media (max-width: 768px) {
      max-width: 50%;
      width: 50%;
      border: none;
      border-bottom: ${id < 5 ? "1px solid #E0E0E0" : "none"};
      height: 100px;
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
