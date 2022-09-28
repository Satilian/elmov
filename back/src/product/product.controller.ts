import { Controller, Get, Query } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('getByPage')
  async getByPage(@Query() query) {
    return await this.productService.getByCategoryPath(query.path);
  }

  @Get('getProduct')
  async getProduct(@Query() query) {
    return await this.productService.getByProductPath(query.path);
  }
}
