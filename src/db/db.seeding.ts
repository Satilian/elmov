import { DataSource } from 'typeorm';
import { pages } from 'constants/data.json';
import { Page } from 'pages/pages.entity';

export const seedingData = async (dataSource: DataSource) => {
  const createPage = (items, parent?: Page) => {
    items.forEach(({ name, path, childrens }) => {
      const page = dataSource.manager.create(Page, { name, path, parent });
      dataSource.manager.save(page).then(() => {
        if (childrens?.length) createPage(childrens, page);
      });
    });
  };

  createPage(pages);
};
