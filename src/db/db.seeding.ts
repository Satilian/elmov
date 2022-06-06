import { Catalog } from 'catalog/catalog.entity';
import { images, pages, pageTypes } from 'constants/data.json';
import { ImageSrc } from 'images/image.entity';
import { Page } from 'pages/page.entity';
import { PageType } from 'pages/pageType.entity';
import { DataSource } from 'typeorm';

export const seedingData = async (dataSource: DataSource) => {
  const pageTypesMap = {};
  await Promise.all(
    pageTypes.map(({ name }) => {
      const pageType = dataSource.manager.create(PageType, { name });
      return dataSource.manager.save(pageType).then((type) => (pageTypesMap[type.name] = type.id));
    }),
  );

  const createPage = async (items, parent?: Page) => {
    for (const { name, path, type, childrens } of items) {
      const page = dataSource.manager.create(Page, {
        name,
        path,
        typeId: pageTypesMap[type],
        parent,
      });

      const { id: pageId } = await dataSource.manager.save(page);

      const { category, name: imageName } = images.find(({ page }) => page === path) || {};

      if (imageName) {
        const imageSrc = dataSource.manager.create(ImageSrc, { category, name: imageName });

        const { id: imageSrcId } = await dataSource.manager.save(imageSrc);
        const catalog = dataSource.manager.create(Catalog, { imageSrcId, pageId });
        await dataSource.manager.save(catalog);
      }

      if (childrens?.length) await createPage(childrens, page);
    }
  };

  await createPage(pages);
};
