import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  margin-top: 20px;
`;
const Title = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;
  color: #a80084;
`;
const Text = styled.p`
  width: 300px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #616161;
`;
const Divider = styled.div`
  border: 1px solid #616161;
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
