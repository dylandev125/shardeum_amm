import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 430px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  margin-top: 2rem;
  @media only screen and (max-width: 600px) {
    margin-top: 1rem;
    gap: 1rem;
    width: 100%;
  }
`;
const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  color: #000000;
`;
const Text = styled.div`
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  font-family: "Inter";
  font-style: normal;
  padding-right: 10px;
`;
const Divider = styled.div`
  border-right: 2px solid #616161;
  height: 55px;
`;

interface TabHeaderProps {
  title: string;
  text: string;
}

function TabHeader({ title, text }: TabHeaderProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Divider />
      <Text>{text}</Text>
    </Wrapper>
  );
}

export default TabHeader;
