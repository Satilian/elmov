import { Module } from '@nestjs/common';
import { dbProvider } from 'db/db.provider';
import { CategoryController } from 'category/category.controller';
import { CategoryService } from 'category/category.service';

@Module({
  controllers: [CategoryController],
  providers: [dbProvider, CategoryService],
})
export class AppModule {}
