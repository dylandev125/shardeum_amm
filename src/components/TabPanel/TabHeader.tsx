import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;
  position: relative;
  margin-left: -24px;
`;
const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;
  display: flex;
  align-items: center;
  color: #a80084;
`;
const Text = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #616161;
  width: 300px;
`;
const Divider = styled.div`
  height: 50px;
  border: 1px solid #616161;
  position: absolute;
  left: 8%;
`;
interface TabHeaderProps {
  title: string;
  text: string;
}

function TabHeader({ title, text }: TabHeaderProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Divider />
    </Wrapper>
  );
}

export default TabHeader;
