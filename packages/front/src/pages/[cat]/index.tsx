import { getLayout } from "components/Layout";
import { PageType } from "interfaces/page";
import { CategoryPage } from "modules/category/Category";
import { getProductsByCategory } from "modules/product/productState";
import { GetServerSideProps } from "next";
import React from "react";
import { configureStore } from "store";

const Category: PageType = () => <CategoryPage />;

Category.getLayout = getLayout;

export default Category;

export const getServerSideProps: GetServerSideProps = async ({ params, ...rest }) => {
  if (!params?.cat) return { props: {} };
  console.log(Object.keys(rest));
  const { store } = configureStore();
  await store.dispatch(getProductsByCategory(String(params.cat)));
  return {
    props: { initialState: store.getState() },
  };
};
