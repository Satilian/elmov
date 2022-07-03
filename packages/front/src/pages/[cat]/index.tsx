import { getLayout } from "components/Layout";
import { PageType } from "interfaces/page";
import { CategoryPage } from "modules/category/Category";
import React from "react";

const Category: PageType = () => <CategoryPage />;

Category.getLayout = getLayout;

export default Category;
