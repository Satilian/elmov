import { getLayout } from "components/Layout";
import { GetServerSideProps } from "next";
import React from "react";

export default function Contacts() {
  return <h1>Contacts page</h1>;
}

Contacts.getLayout = getLayout;

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {},
});
