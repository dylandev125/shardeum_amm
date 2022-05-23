import React from "react";
import styled from "styled-components";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Container = styled.div`
  width: 510px;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const WrapperTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
`;
const WrapperValue = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
  text-align: right;
`;
const RouteCont = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const RoutesCont = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

interface IsWrapper {
  Recieved: any;
  Price: any;
  Network: any;
  Exchange: any;
  Save: any;
  Route: any;
}
const Wrapper = ({
  Recieved,
  Price,
  Network,
  Exchange,
  Save,
  Route,
}: IsWrapper) => {
  return (
    <Container>
      <WrapperContent>
        <WrapperTitle>Minimum Recieved</WrapperTitle>
        <WrapperTitle>Price Impact</WrapperTitle>
        <WrapperTitle>Network Fee</WrapperTitle>
        <WrapperTitle>Exchange Fee</WrapperTitle>
        <WrapperTitle>You Save</WrapperTitle>
        <WrapperTitle>Route</WrapperTitle>
      </WrapperContent>
      <WrapperContent>
        <WrapperValue>{Recieved}</WrapperValue>
        <WrapperValue>{Price}</WrapperValue>
        <WrapperValue>{Network}</WrapperValue>
        <WrapperValue>{Exchange}</WrapperValue>
        <WrapperValue>{Save}</WrapperValue>
        <WrapperValue>
          <RoutesCont>
            {Route.map((item: any, index: number) => (
              <RouteCont key={index}>
                <img
                  src={item.icon}
                  alt={item.name}
                  style={{ width: "20px" }}
                />
                <span>{item.name}</span>
                {index !== Route.length - 1 ? <ArrowRightAltIcon /> : null}
              </RouteCont>
            ))}
          </RoutesCont>
        </WrapperValue>
      </WrapperContent>
    </Container>
  );
};
export default Wrapper;
