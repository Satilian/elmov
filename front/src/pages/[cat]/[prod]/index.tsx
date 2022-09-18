import { getLayout } from "components/Layout";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { productRouts } from "routs/productRouts";

export default function Product() {
  const { pathname, asPath, replace } = useRouter();
  useEffect(() => {
    replace(`${pathname}${productRouts.feature.link}`, `${asPath}${productRouts.feature.link}`);
  }, []);
  return null;
}

Product.getLayout = getLayout;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { state: {} },
  };
};
