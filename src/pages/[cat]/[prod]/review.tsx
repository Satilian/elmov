import { getProductLayout } from 'modules/product/components/ProductLayout';
import { PageType } from 'interfaces/pageType';
import React from 'react';

const Review: PageType = () => {
  return <div>Review</div>;
};

Review.getLayout = getProductLayout;

export default Review;
