import { productRep } from "api/productRep";
import { getLayout } from "components/Layout";
import { ProductDto } from "interfaces/product";
import { Category } from "modules/category/Category";
import { GetServerSideProps } from "next";
import React from "react";

type Props = {
  productList: ProductDto[];
};
export default function CategoryPage({ productList }: Props) {
  return <Category productList={productList} />;
}

CategoryPage.getLayout = getLayout;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const productList = await productRep.fetchByCategory(String(params?.cat));

  return { props: { productList } };
};
