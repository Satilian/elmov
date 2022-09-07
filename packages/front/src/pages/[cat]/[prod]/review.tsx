import { productRep } from "api/productRep";
import { getProductLayout } from "components/ProductLayout";
import { GetServerSideProps } from "next";
import React from "react";

export default function ReviewPage() {
  return <div>Review</div>;
}

ReviewPage.getLayout = getProductLayout;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const product = await productRep.fetchProduct(String(params?.prod));

  return {
    props: { product },
  };
};
