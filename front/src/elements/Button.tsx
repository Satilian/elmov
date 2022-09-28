import styled from "astroturf/react";

export type Props = {
  btnType?: string;
  size?: string;
  block?: boolean;
};

export const Button = styled.button<Props>`
  background: white;
  border: 0;
  height: 50px;
  line-height: 100%;
  padding: 0 10px;
  cursor: pointer;
  outline: 0;
  width: max-content;
  font: inherit;
  font-size: inherit;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.8;
  }
  &.size-small {
    height: 26px;
  }
  &.size-big {
    height: 60px;
  }
  &.block {
    width: 100%;
  }
`;
