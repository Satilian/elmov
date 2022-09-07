import { getLayout } from "components/Layout";
import { Main } from "components/Main";
import { GetServerSideProps } from "next";
import React from "react";

export default function HomePage() {
  return <Main />;
}

HomePage.getLayout = getLayout;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
