import { getProductLayout } from 'client/modules/product/components/ProductLayout';
import { PageType } from 'client/interfaces/pageType';
import React from 'react';

const Feature: PageType = () => {
  return <div>Feature</div>;
};

Feature.getLayout = getProductLayout;

export default Feature;
