import { getProductLayout } from 'client/modules/product/components/ProductLayout';
import { PageType } from 'client/interfaces/pageType';
import React from 'react';

const Review: PageType = () => {
  return <div>Review</div>;
};

Review.getLayout = getProductLayout;

export default Review;
