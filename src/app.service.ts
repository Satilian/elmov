import { Inject, Injectable } from '@nestjs/common';
import { Page } from 'pages/page.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class AppService {
  constructor(@Inject('DATA_SOURCE') private dbProvider: DataSource) {}

  getCategories() {
    return this.dbProvider.manager.getTreeRepository(Page).findTrees();
  }
}
