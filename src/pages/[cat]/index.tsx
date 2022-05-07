import { getLayout } from 'client/components/Layout';
import { PageType } from 'client/interfaces/pageType';
import { CategoryPage } from 'client/modules/category/Category';
import React from 'react';

const Category: PageType = () => <CategoryPage />;

Category.getLayout = getLayout;

export default Category;
