import { getLayout } from "components/Layout";
import { PageType } from "interfaces/page";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { productRouts } from "routs/productRouts";

const Product: PageType = () => {
  const { pathname, asPath, replace } = useRouter();
  useEffect(() => {
    replace(`${pathname}${productRouts.feature.link}`, `${asPath}${productRouts.feature.link}`);
  }, []);
  return null;
};

Product.getLayout = getLayout;

export default Product;
