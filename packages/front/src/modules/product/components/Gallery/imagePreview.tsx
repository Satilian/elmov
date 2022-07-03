import styled from "astroturf/react";
import { imagePath } from "consts/common";
import React, { ReactEventHandler } from "react";

interface IProps {
  name: string;
  onClick?: ReactEventHandler<HTMLDivElement>;
}

export const ImagePreview = ({ name, onClick }: IProps) => {
  return (
    <Container onClick={onClick}>
      <img src={`${imagePath}${name}`} alt={""} />
    </Container>
  );
};

const Container = styled.div`
  @import "variables";
  width: 8vw;
  height: 8vw;
  overflow: hidden;
  border: 1px solid $green;
  margin-bottom: 0.5vw;

  img {
    width: 100%;
    max-height: 100%;
  }
`;
