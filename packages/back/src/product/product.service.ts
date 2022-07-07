import { Inject, Injectable } from '@nestjs/common';
import { Page } from 'entities/page.entity';
import { Product } from 'entities/product.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(@Inject('DATA_SOURCE') private dbProvider: DataSource) {}

  getByPage = (path: Page['path']) =>
    this.dbProvider.getRepository(Product).find({
      relations: ['page', 'category', 'images'],
      where: { page: { path } },
    });
}
