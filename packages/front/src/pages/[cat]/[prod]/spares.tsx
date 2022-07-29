import { getProductLayout } from "components/ProductLayout";
import { getProduct } from "modules/product/productState";
import { GetServerSideProps } from "next";
import React from "react";
import { store } from "store";
import { getPartialState } from "util/getPartialState";

const Spares = () => {
  return <div>Parts</div>;
};

Spares.getLayout = getProductLayout;

export default Spares;

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  store.dispatch(getProduct(String(params?.prod)));

  return {
    props: { state: await getPartialState({ keys: ["product"], req }) },
  };
};
