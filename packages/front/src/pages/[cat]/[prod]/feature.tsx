import { getProductLayout } from "components/ProductLayout";
import { PageType } from "interfaces/page";
import React from "react";

const Feature: PageType = () => {
  return <div>Feature</div>;
};

Feature.getLayout = getProductLayout;

export default Feature;
