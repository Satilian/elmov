import { Category } from 'entities/category.entity';
import { images, pages, pageTypes, categoriesTree } from 'constants/data.json';
import { Image } from 'entities/image.entity';
import { Page } from 'entities/page.entity';
import { PageType } from 'entities/pageType.entity';
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

  const imagesMap = {};
  await Promise.all(
    images.map((src) => {
      const image = dataSource.manager.create(Image, { src });
      return dataSource.manager.save(image).then((image) => (imagesMap[image.src] = image.id));
    }),
  );

  type Tree = { page: string; image?: string; childrens?: Tree[] };

  const createCategory = async (tree: Tree[], parent?: Category) => {
    for (const cat of tree) {
      const page = pagesMap[cat.page];
      const image = imagesMap[cat.image];
      const category = dataSource.manager.create(Category, { page, image, parent });
      await dataSource.manager.save(category);

      cat.childrens?.length && (await createCategory(cat.childrens, category));
    }
  };

  createCategory(categoriesTree);
};
