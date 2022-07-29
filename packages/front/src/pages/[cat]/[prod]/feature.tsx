import { getProductLayout } from "components/ProductLayout";
import { PageType } from "interfaces/common";
import { getProduct } from "modules/product/productState";
import { GetServerSideProps } from "next";
import React from "react";
import { store } from "store";
import { getPartialState } from "util/getPartialState";

const Feature: PageType = () => {
  return <div>Feature</div>;
};

Feature.getLayout = getProductLayout;

export default Feature;

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  store.dispatch(getProduct(String(params?.prod)));

  return {
    props: { state: await getPartialState({ keys: ["product"], req }) },
  };
};
