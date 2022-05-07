import { getProductLayout } from 'client/modules/product/components/ProductLayout';
import { PageType } from 'client/interfaces/pageType';
import React from 'react';

const Spares: PageType = () => {
  return <div>Parts</div>;
};

Spares.getLayout = getProductLayout;

export default Spares;
