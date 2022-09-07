import { productRep } from "api/productRep";
import { getProductLayout } from "components/ProductLayout";
import { GetServerSideProps } from "next";
import React from "react";

export default function SparesPage() {
  return <div>Parts</div>;
}

SparesPage.getLayout = getProductLayout;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const product = await productRep.fetchProduct(String(params?.prod));

  return {
    props: { product },
  };
};
