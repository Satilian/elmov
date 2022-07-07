import { Controller, Get } from '@nestjs/common';
import { Page } from 'entities/page.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('getByPage')
  async getByPage(path: Page['path']) {
    return await this.productService.getByPage(path);
  }
}
