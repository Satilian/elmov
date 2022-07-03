import { Inject, Injectable } from '@nestjs/common';
import { Category } from 'entities/category.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(@Inject('DATA_SOURCE') private dbProvider: DataSource) {}

  getCategories = async () =>
    (
      await this.dbProvider.manager
        .getTreeRepository(Category)
        .findTrees({ relations: ['page', 'image'] })
    )[0].childrens;
}
