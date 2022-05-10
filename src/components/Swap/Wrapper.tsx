import React from "react";
import Style from "styled-components";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Container = Style.div`
display:flex;
justify-content:space-between;
position:relative;
padding:2rem;
width:500px;

@media (max-width:900px){
  width:90%;
}
`;
const WrapperContent = Style.div`
display:flex;
flex-direction:column;
margin-right:-15px;

line-height:27px;
`;
const WrapperTitle = Style.span`
text-align:left;
color:black;
`;
const WrapperValue = Style.span`
text-align:right;
color:black;
`;
const RouteCont = Style.div`
display:flex;
align-items:center;
gap:5px;
`;
const RoutesCont = Style.div`
display:flex;
align-items:center;
gap:15px;
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
