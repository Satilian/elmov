import { Module } from '@nestjs/common';
import { dbProvider } from 'db/db.provider';
import { CategoryController } from 'category/category.controller';
import { CategoryService } from 'category/category.service';
import { ProductController } from 'product/product.controller';
import { ProductService } from 'product/product.service';

@Module({
  controllers: [CategoryController, ProductController],
  providers: [dbProvider, CategoryService, ProductService],
})
export class AppModule {}
