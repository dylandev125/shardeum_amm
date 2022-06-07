import React from "react";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import styled from "styled-components";
interface Props {
  image: string;
  id: number;
  text: string;
  choosen?: number;
  setChoosen?: (choosen: number) => void;
  type: string;
}

const Wrapper = styled.div`
  width: 85px;
  padding: 6px;
  display: flex;
  border-radius: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  :hover {
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.04);
  }
`;
const Image = styled.img`
  height: 50px;
  aspect-ratio: auto 50 / 50;
  width: 50px;
`;
const Text = styled.p`
  font-size: 12px;
  font-weight: 400;
`;
const StyledCheclIcon = styled(CheckRoundedIcon)`
  position: absolute;
  background: #00c853;
  color: #ffffff;
  border-radius: 50%;
  width: 15px !important;
  height: 15px !important;
  padding: 5px !important;
  bottom: 25px;
  right: 20px;
`;

function NetworkItem({ id, image, text, choosen, setChoosen, type }: Props) {
  return (
    <Wrapper onClick={() => setChoosen && setChoosen(id)}>
      <Image src={image} alt={text} />
      <Text>{text}</Text>
    
      {choosen === id && type === "network" ? <StyledCheclIcon /> : null}
    </Wrapper>
  );
}

export default NetworkItem;
