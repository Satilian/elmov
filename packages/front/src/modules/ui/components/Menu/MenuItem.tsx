import styled from "astroturf/react";
import { NextImage } from "components/NextImage";
import { CategoryDto } from "interfaces/page";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { Anchor } from "./Anchor";

type Props = {
  name: string;
  path: string;
  imgUrl?: string;
  topLevel?: boolean;
  onClick?: () => void;
  delay?: number;
  isOpen?: boolean;
  subCategory?: CategoryDto[];
};

export const MenuItem = ({
  name,
  path,
  subCategory,
  topLevel,
  onClick,
  delay = 0,
  imgUrl,
  isOpen,
}: Props) => {
  const { asPath } = useRouter();
  const [inPlace, setInPlase] = useState(false);

  const handleClick = (e: SyntheticEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  useEffect(() => {
    const timerId = setTimeout(() => setInPlase(true), delay);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  const href = `/${path === "contacts" ? path : "[cat]"}`;

  return (
    <Link href={href} as={path} passHref>
      <A
        main={asPath === "/"}
        topLevel={topLevel}
        inPlace={inPlace}
        onMenuOpen={topLevel && subCategory?.length ? handleClick : undefined}
        active={asPath.includes(path)}
        isOpen={isOpen}
      >
        {topLevel ? (
          name
        ) : (
          <>
            <Title>{name}</Title>
            {imgUrl && <Img src={`/images/menu/${imgUrl}`} />}
          </>
        )}
      </A>
    </Link>
  );
};

export type StyledAnchorType = {
  main?: boolean;
  topLevel?: boolean;
  inPlace?: boolean;
  active?: boolean;
  isOpen?: boolean;
};

const A = styled(Anchor)<StyledAnchorType>`
  @import "variables";
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  background: $white;
  box-shadow: $shadow;
  font-size: 1.5vw;
  line-height: 100%;
  cursor: pointer;
  z-index: 0;
  transition: all 0.6s ease;
  position: relative;
  left: -25vw;
  text-decoration: none;
  color: $black;
  &.main.topLevel {
    background: $green_t;
  }
  &.topLevel {
    justify-content: center;
    align-items: center;
    background: $green;
    color: $white;
    left: 0;
  }
  &.inPlace {
    left: 0;
  }
  &.active {
    @include menuItemUp;
  }
  &.topLevel.isOpen,
  &.topLevel.active {
    z-index: 0;
  }
  &:hover {
    @include menuItemUp;
  }
  &.topLevel:hover {
    background: $green;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  font-family: Fira Sans Condensed;
  text-align: center;
`;

const Img = styled(NextImage)`
  align-self: center;
  margin: 0 10px;
  width: 5vw;
  height: 5vw;
`;
