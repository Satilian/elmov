import { getLayout } from "components/Layout";
import { Category } from "modules/category/Category";
import { getProductsByCategory } from "modules/product/productState";
import { GetServerSideProps } from "next";
import React from "react";
import { store } from "store";
import { getPartialState } from "util/getPartialState";

export default function CategoryPage() {
  return <Category />;
}

CategoryPage.getLayout = getLayout;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  await store.dispatch(getProductsByCategory(String(params?.cat)));

  return { props: { state: getPartialState(store.getState(), { keys: ["product"] }) } };
};
