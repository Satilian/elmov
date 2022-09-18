import styled from "astroturf/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export interface ITab {
  title: string;
  link: string;
}

interface IProps {
  items: ITab[];
}

export const Tabs = ({ items }: IProps) => {
  const { pathname, asPath } = useRouter();

  return (
    <Container>
      {items.map(({ title, link }) => (
        <Wrapper key={title}>
          <Link
            href={`${pathname.split("/").slice(0, -1).join("/")}${link}`}
            as={`${asPath.split("/").slice(0, -1).join("/")}${link}`}
            passHref
            scroll={false}
          >
            <Tab active={`/${asPath.split("/").slice(-1)}` === link}>{title}</Tab>
          </Link>
        </Wrapper>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
`;

const Wrapper = styled.div`
  @import "variables";
  display: flex;
  align-items: center;
  justify-content: center;
  &:not(:last-child) {
    border-right: 1px solid $green;
  }
`;

const Tab = styled.a<{ active?: boolean }>`
  @import "variables";
  text-decoration: none;
  color: $white;
  background: $green;
  line-height: 2.5vw;
  width: 14vw;
  text-align: center;
  font-size: 1.5vw;
  &.active {
    background: $black;
  }
`;
