import { categoriesTree, category, pages, pageTypes, productImages } from 'constants/data.json';
import { Category } from 'entities/category.entity';
import { ProductImage } from 'entities/productImage.entity';
import { Page } from 'entities/page.entity';
import { PageType } from 'entities/pageType.entity';
import { Product } from 'entities/product.entity';
import { DataSource } from 'typeorm';

export const seedingData = async (dataSource: DataSource) => {
  const pageTypesMap = {};
  await Promise.all(
    pageTypes.map((name) => {
      const pageType = dataSource.manager.create(PageType, { name });
      return dataSource.manager.save(pageType).then((type) => (pageTypesMap[type.name] = type.id));
    }),
  );

  const pagesMap = {};
  await Promise.all(
    pages.map(({ path, name, type }) => {
      const page = dataSource.manager.create(Page, { path, name, type: pageTypesMap[type] });
      return dataSource.manager.save(page).then((page) => (pagesMap[page.path] = page.id));
    }),
  );

  type Tree = { page: string; image?: string; childrens?: Tree[] };

  const categoryMap = {};
  const createCategory = async (tree: Tree[], parent?: Category) => {
    for (const cat of tree) {
      const page = pagesMap[cat.page];
      const image = cat.image;
      const category = dataSource.manager.create(Category, { page, image, parent });
      await dataSource.manager.save(category).then(({ id }) => (categoryMap[cat.page] = id));

      cat.childrens?.length && (await createCategory(cat.childrens, category));
    }
  };

  await createCategory(categoriesTree);

  const productsMap = {};
  await Promise.all(
    category.map(async ({ name, items }) => {
      await Promise.all(
        items.map((path) => {
          const product = dataSource.manager.create(Product, {
            page: pagesMap[path],
            category: categoryMap[name],
          });
          return dataSource.manager.save(product).then((prod) => (productsMap[path] = prod.id));
        }),
      );
    }),
  );

  await Promise.all(
    productImages.map(async ({ product, images }) => {
      images.map((src) => {
        const image = dataSource.manager.create(ProductImage, {
          product: productsMap[product],
          src,
        });
        dataSource.manager.save(image);
      });
    }),
  );
};
