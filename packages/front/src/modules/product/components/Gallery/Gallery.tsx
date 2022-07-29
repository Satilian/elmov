import styled from "astroturf/react";
import { NextImage } from "components/NextImage";
import { imagePath } from "consts/common";
import { ProductImageDto } from "interfaces/product";
import React, { useState } from "react";
import { ImagePreview } from "./imagePreview";

interface IProps {
  items: ProductImageDto[];
  path: string;
}

export const Gallery = ({ items, path }: IProps) => {
  const [active, setActive] = useState(items[0]?.src || "");

  return (
    <Container>
      <PreviewWrapper>
        {items.map(({ id, src }) => (
          <ImagePreview key={id} name={`${path}/${src}`} onClick={() => setActive(src)} />
        ))}
      </PreviewWrapper>

      <Img src={`${imagePath}${path}/${active}`} priority />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PreviewWrapper = styled.div`
  @import "variables";
  height: 25vw;
  overflow-x: hidden;
  overflow-y: auto;
  margin-right: 1vw;
  padding-right: 4px;

  @-moz-document url-prefix() {
    & {
      padding-right: 16px;
    }
  }

  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border: 1px solid $green;
    background: $green_t;
    border-radius: 25px;
  }

  scrollbar-color: $green transparent;
  scrollbar-width: auto;
`;

const Img = styled(NextImage)`
  @import "variables";
  width: 25vw;
  height: 25vw;
  object-fit: cover;
  border: 1px solid $green;
`;
