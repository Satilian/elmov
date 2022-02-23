import styled from 'astroturf/react';
import { imagePath } from 'consts/common';
import React, { ReactEventHandler } from 'react';
import Image from 'next/image';

interface IProps {
  name: string;
  onClick?: ReactEventHandler<HTMLDivElement>;
}

export const ImagePreview = ({ name, onClick }: IProps) => {
  return (
    <Container onClick={onClick}>
      <Image src={`${imagePath}${name}`} alt={name} width="8vw" height="8vw" />
    </Container>
  );
};

const Container = styled.div`
  @import 'variables';
  overflow: hidden;
  border: 1px solid $green;
  margin-bottom: 0.5vw;
`;
