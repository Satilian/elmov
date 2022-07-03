import styled from "astroturf/react";
import { imagePath } from "consts/common";
import React, { useState } from "react";
import { ImagePreview } from "./imagePreview";

interface IProps {
  items: string[];
}

export const Gallery = ({ items }: IProps) => {
  const [active, setActive] = useState(items[0] || "");

  return (
    <Container>
      <PreviewWrapper>
        {items.map((item) => (
          <ImagePreview key={item} name={item} onClick={() => setActive(item)} />
        ))}
      </PreviewWrapper>

      <Image>
        <img src={`${imagePath}${active}`} />
      </Image>
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

const Image = styled.div`
  @import "variables";
  width: 25vw;
  height: 25vw;
  object-fit: cover;
  border: 1px solid $green;
  img {
    width: 100%;
    height: 100%;
  }
`;
