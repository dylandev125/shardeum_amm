import React from "react";
import styled from "styled-components";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallReceivedIcon from "@mui/icons-material/CallReceived";

interface TrendProps {
  up: boolean;
  trend: number;
}

export default function Trend({ up, trend }: TrendProps) {
  const TrendCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${up ? "#00C853" : "#C62828"};
    @media (max-width: 768px) {
      font-size: 14px;
      flex-direction: row;
    }
  `;
  return (
    <TrendCont>
      {up ? <CallMadeIcon /> : <CallReceivedIcon />}
      {trend}
    </TrendCont>
  );
}
