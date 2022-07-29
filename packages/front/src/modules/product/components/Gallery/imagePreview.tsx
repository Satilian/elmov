import styled from "astroturf/react";
import { NextImage } from "components/NextImage";
import { imagePath } from "consts/common";
import React, { ReactEventHandler } from "react";

interface IProps {
  name: string;
  onClick?: ReactEventHandler<HTMLDivElement>;
}

export const ImagePreview = ({ name, onClick }: IProps) => {
  return <Container src={`${imagePath}${name}`} onClick={onClick} />;
};

const Container = styled(NextImage)`
  @import "variables";
  width: 8vw;
  height: 8vw;
  border: 1px solid $green;
  margin-bottom: 0.5vw;
`;
