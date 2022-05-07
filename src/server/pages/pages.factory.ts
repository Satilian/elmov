import { Page } from './page.entity';
import { define } from 'typeorm-seeding';

define(Page, () => {
  const page = new Page();
  return page;
});
