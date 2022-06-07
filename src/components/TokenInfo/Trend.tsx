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
  `;

  return (
    <TrendCont>
      {up ? (
        <CallMadeIcon style={{ width: "16px", height: "16px" }} />
      ) : (
        <CallReceivedIcon style={{ width: "16px", height: "16px" }} />
      )}
      ${trend}
    </TrendCont>
  );
}
