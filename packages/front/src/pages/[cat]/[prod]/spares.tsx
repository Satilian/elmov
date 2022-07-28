import { getProductLayout } from "components/ProductLayout";
import { PageType } from "interfaces/common";
import React from "react";

const Spares: PageType = () => {
  return <div>Parts</div>;
};

Spares.getLayout = getProductLayout;

export default Spares;
