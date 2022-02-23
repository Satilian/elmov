import { getProductLayout } from "components/ProductLayout";
import { PageType } from "interfaces/pageType";
import React from "react";

const Feature: PageType = () => {
  return <div>Feature</div>;
};

Feature.getLayout = getProductLayout;

export default Feature;
