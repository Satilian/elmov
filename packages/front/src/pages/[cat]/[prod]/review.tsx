import { getProductLayout } from "components/ProductLayout";
import { PageType } from "interfaces/common";
import React from "react";

const Review: PageType = () => {
  return <div>Review</div>;
};

Review.getLayout = getProductLayout;

export default Review;
